(ns cnake.ui
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cnake.utils.dom :as dom]
            [cnake.utils.canvas :as canvas]
            [cnake.game :as game]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts!]]
            [goog.events :as events]
            [goog.dom :as gdom]
            [clojure.set :refer [union]]
            [clojure.string :as string]))

(def world "UI state" (atom nil))

;; -------------------------------------------------------------------------------
;; Canvas UI

(def cvs
  "Canvas dom element on the page"
  (dom/by-id "cnake"))

(def ctx
  "Canvas 2d context for drawing"
  (canvas/context cvs))

(def square-size
  "Size of each square in the board"
  10)

(def half-square (/ square-size 2))
(def pill-radius 4)

;; Height and width of the canvas in pixels depending of the square-size and
;; the game's board size
(def width (* game/width square-size))
(def height (* game/height square-size))

(defn point->coords
  "Transforms a board point into pixels"
  [point] (map (partial * square-size) point))

(defn move-coords
  "Traslates coords x y pixels"
  [coords & tp] (map + coords tp))

(defn resize-canvas!
  "Resize canvas to the required size for the board"
  [] (canvas/set-dimensions! cvs width height))

(defn draw-timestamp!
  "Draw a timestamp in the bottom right of the canvas"
  [ctx]
  (canvas/font! ctx "monospace" 12 "normal")
  (canvas/text-align! ctx "right")
  (canvas/fill-style! ctx [0 100 40])
  (canvas/fill-text! ctx (.toLocaleString (js/Date.)) (- width 10) (- height 10)))

(defn draw-text!
  "Draw a text in the screen of the canvas"
  [ctx text]
  (canvas/font! ctx "monospace" 16 "bold")
  (canvas/text-align! ctx "center")
  (canvas/fill-style! ctx [0 0 0])
  (let [lines (.split text "\n")
        n (quot (count lines) 2)]
    (doseq [[line y] (map vector lines (range (- n) (+ n 1)))]
      (canvas/fill-text! ctx line (quot width 2) (+ (quot height 2) (* 18 y))))))

(def snake-color
  "Snake body color [hue saturation lightness]"
  [0 100 40])

(defn draw-snake
  "Draw a snake on the board."
  [ctx snake]
  (canvas/fill-style! ctx snake-color)
  (doseq [[x y] snake]
    (canvas/fill-rect! ctx x y square-size square-size)
    (canvas/stroke-rect! ctx x y square-size square-size)
    ))

(def pill-color
  "Pill color [hue saturation lightness]"
  [140 50 40])

(defn draw-pills
  "Draw the pills on the board"
  [ctx pills]
  (canvas/fill-style! ctx pill-color)
  (doseq [[x y] pills]
    (canvas/fill-circle! ctx x y pill-radius)
    (canvas/stroke-circle! ctx x y pill-radius)))

(defn draw-game-over! [ctx]
  (draw-text! ctx "GAME OVER\nPress Enter to restart"))

;; -------------------------------------------------------------------------------
;; UI data fns

(defn game-world->ui-world
  "Transforms a game snapshot into ui world data"
  [{:keys [snake pills] :as game}]
  {:snake (map point->coords (:body snake))
   :pills (map #(-> %
                    (point->coords)
                    (move-coords half-square half-square)) pills)})

;; -------------------------------------------------------------------------------
;; Render logic

(defn render
  "Render"
  [{:keys [snake pills] :as world}]
  (if world
    (do
      (canvas/clear-rect! ctx 0 0 width height)
      (canvas/save! ctx)
      (canvas/translate! ctx 0.5 0.5) ; To avoid blurry lines
;;       (draw-timestamp! ctx)
      (draw-pills ctx pills)
      (draw-snake ctx snake)
      (canvas/restore! ctx)))
  )

(defn render-loop!
  "Render loop. Watches for updates from the game and sets the
  actual loop that renders"
  [notifos]
  (go-loop [[cmd v] (<! notifos)]
;;       (println cmd v)
      (case cmd
        :world (reset! world (game-world->ui-world v))
        :game-over (do (reset! world nil) (draw-game-over! ctx))
        (println (js/Error. (str "Unrecognized UI command: " cmd))))
    (recur (<! notifos)))

  (canvas/request-animation-frame (fn lo []
                                    (canvas/request-animation-frame lo)
                                    (render @world))))

;; -------------------------------------------------------------------------------
;; Key events handling

(def keycodes
  "Keycodes that interest us. Taken from
  http://docs.closure-library.googlecode.com/git/closure_goog_events_keynames.js.source.html#line33"
  {37 :left
   38 :up
   39 :right
   40 :down
   32 :space
   13 :enter})

(defn event->key
  "Transform an js event object into the key name"
  [ev] (get keycodes (.-keyCode ev) :key-not-found))

(defn event-chan
  "Creates a channel with the events of type event-type and optionally applies
  the function parse-event to each event."
  ([event-type] (event-chan event-type identity))
  ([event-type parse-event]
   (let [ev-chan (chan)]
     (events/listen (.-body js/document)
                    event-type
                    #(put! ev-chan (parse-event %)))
     ev-chan)))

(defn keys-chan
  "Returns a channel with the key events of event-type parsed and
  filtered by the allowed-keys"
  [event-type allowed-keys]
  (let [evs (event-chan event-type event->key)]
    (filter< allowed-keys evs)))

(def boost-keys "Keys that trigger boost" #{:space})
(def move-keys "Keys that trigger movement" #{:left :up :right :down})
(def reset-key "Reset key" #{:enter})

(def valid-keys-up
  "Keys we want to listen on key up"
  boost-keys)

(defn keys-up-chan
  "Create a channel of keys up restricted by the valid keys"
  [] (keys-chan (.-KEYUP events/EventType) valid-keys-up))

(def valid-keys-down
  "Keys we want to listen on key down"
  (union move-keys boost-keys reset-key))

(defn keys-down-chan
  "Create a channel of keys pressed down restricted by the valid keys"
  [] (keys-chan (.-KEYDOWN events/EventType) valid-keys-down))

(defn key-down->command
  "Transform a key pressed down to the command we will send to the game"
  [k]
  (cond
   (move-keys k) [:turn k]
   (reset-key k) [:reset]
   (boost-keys k) [:turbo true]))

(defn key-up->command
  "Transform a key up to the command we will send to the game"
  [k]
  (cond
   (boost-keys k) [:turbo false]))

(defn init-events!
  "Initialize event processing. It takes all the key presses and transforms
  them into commands and passes them to the game commands channel"
  [game-commands]
  (let [keys-pressed (keys-down-chan)
        keys-up (keys-up-chan)
        commands (unique (merge [(map< key-down->command keys-pressed)
                                 (map< key-up->command keys-up)]))]
    (pipe commands game-commands)))

;; -------------------------------------------------------------------------------
;; UI starting point

(defn init
  "Initialize the UI by initializing the user input, adapting the canvas
  and starting the render loop."
  []
  (let [commands (chan)
        notifos (game/init commands)]
    (init-events! commands)
    (resize-canvas!)
    (render-loop! notifos)
    (put! commands [:init])
    ))
