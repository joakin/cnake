(ns cnake.game
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan put! <! timeout]]))

;; --------------------------------------------------------------------------------
;; Game info

(def width "Board width" 20)
(def height "Board height" 16)

(def game-speed "Game logic tick speed" 200)
(def game-turbo "Game speed turbo multiplier" 4)

(def min-pills "Minimum number of pills on the board" 3)

(def initial-body-length 3)
(def initial-body-x-pos (quot width 3))
(def initial-body-y-pos (quot height 2))

(def initial-body (vec (map vector
                            (map + (range initial-body-length) (repeat initial-body-x-pos))
                            (repeat initial-body-y-pos))))

(def initial-snake {:body initial-body
                    :vel [1 0]})

(def initial-world {:snake initial-snake
                    :pills []
                    :speed game-speed
                    :status nil})

;; --------------------------------------------------------------------------------
;; Snake logic

(defn new-vel
  "Update velocity of a snake entity depending on which direction
  is passed (:up|down|left|right).
  The velocity is stored in :new-vel, and will be swapped with the
  old one in update-position"
  [snake direction]
  (let [new-vel (case direction
                  :up    [0 -1]
                  :down  [0  1]
                  :left  [-1 0]
                  :right [1  0]
                  (:vel snake))]
    (assoc snake :new-vel new-vel)))

(defn mod-position
  "Wraps the position of a point if it is out of bounds off the map"
  [pos]
  (map mod pos [width height]))

(defn update-vel
  "Swaps the new-vel with the current vel if it isn't the opposite
  direction and removes the new-vel from the snake"
  [snake]
  (let [vel (:vel snake)
        new-vel (:new-vel snake)
        opposite-vel? (= [0 0] (map + new-vel vel))]
    (if new-vel
      (dissoc (if-not opposite-vel?
                (assoc snake :vel new-vel)
                snake)
              :new-vel)
      snake)))

(defn update-position
  "Updates the position of the snake based on its own direction"
  [snake]
  (let [turned-snake (update-vel snake)
        body (:body snake)
        last-pos (last body)
        new-pos (mod-position (map + last-pos (:vel turned-snake)))]
    (assoc turned-snake :body (conj (subvec body 1) new-pos))))

(defn crashed?
  "Returns if snake crashed with itself."
  [{:keys [body]}]
  (let [head (last body)
        in-body? (comp not nil? (into #{} (butlast body)))]
    (in-body? head)))

(defn feed
  "Checks if the snake feeds and returns the pill or nil"
  [{:keys [body] :as snake} pills]
  (some #{(last body)} pills))

(defn grow
  "Grows the snake according to the old snake"
  [{:keys [body] :as new-snake} {old-body :body}]
  (assoc new-snake :body (conj old-body (last body))))

;; --------------------------------------------------------------------------------
;; Pills logic

(defn random-point
  "Returns a random point in the keyboard"
  []
  [(rand-int width) (rand-int height)])

(defn update-pills
  "Generate pills when there are none.
  Generate in free space"
  [pills world]
  (if (< (count pills) min-pills)
    (let [busy (into #{} (concat pills
                                 (get-in world [:snake :body])))]
      (loop [pill (random-point) tries 30]
        (cond
         (= tries 0) pills
         (not (busy pill)) (conj pills pill)
         :else (recur (random-point) (dec tries)))))
    pills))

;; --------------------------------------------------------------------------------
;; Game logic

(defn update-speed
  "Updates the speed of the snake"
  [game speed-up?]
  (let [cur-speed (:speed game)]
    (assoc game :speed (if speed-up?
                          (/ cur-speed game-turbo)
                          (* cur-speed game-turbo)))))

(defn plan-tick!
  "Tick the game after the elapsed speed time"
  ([speed cmds] (plan-tick! speed cmds (chan)))
  ([speed cmds shortcircuit]
   (go
    (alts! [(timeout speed) shortcircuit])
    (put! cmds [:tick]))))

(defn update-world
  "Applies the game constraints (eating, dying, ...) to the world
  and returns the new version."
  [{:keys [snake pills] :as world}]
  ;; Update snake position
  (let [new-snake (update-position snake)]
    ;; Check for dead and game-over
    (if (crashed? new-snake)
      (assoc world :status :game-over)
      ;; Check if snake eats
      (if-let [meal (feed new-snake pills)]
        ;; Grow snake
        ;; Update pills
        (let [fed-snake (grow new-snake snake)
              fed-pills (update-pills (remove #{meal} pills) world)]
          (assoc world :snake fed-snake
            :pills fed-pills
            :status :eat))

        (assoc world :snake new-snake
          :pills (update-pills pills world)
          :status :move)))))

(defn game!
  "Game internal loop that processes commands and updates state
  applying functions"
  [initial-world cmds notify]
  (go-loop [{:keys [status snake pills speed] :as world} initial-world]
    (let [[cmd v] (<! cmds)]
      ; (println "Received: " cmd)
      (if (and (= status :game-over) (not= cmd :reset))
        (recur world)
        (case cmd
          :init (do (plan-tick! 0 cmds) (recur world))

          :reset (do
                   (if (= status :game-over) (put! cmds [:init]))
                   (recur initial-world))

          :tick (let [new-world (update-world world)
                      status (:status new-world)]
                  (if (= status :game-over)
                    (do
                      (>! notify [:game-over])
                      (recur new-world))
                    (do
                      (plan-tick! speed cmds)
                      (>! notify [status])
                      (>! notify [:world new-world])
                      (recur new-world))))

          :turn (recur (assoc world :snake (new-vel snake v)))

          :turbo (recur (update-speed world v))

          (throw (js/Error. (str "Unrecognized game command: " cmd))))))))

(defn init [commands]
  (let [notifos (chan)]
    (game! initial-world commands notifos)
    notifos))

