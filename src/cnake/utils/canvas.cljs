(ns cnake.utils.canvas)

(defn context [canvas] (.getContext canvas "2d"))

(defn set-dimensions! [canvas w h]
  (set! (.-width canvas) w)
  (set! (.-height canvas) h))

(defn hsla
  "Returns a string with the hsla color.
  h(ue) is a value between 0 and 360
  s(aturation) is a value between 0 and 100
  l(ightness) is a value between 0 and 100
  a(lpha) [optional] between 0 and 1"
  ([h s l] (hsla h s l 1))
  ([h s l a]
   (str "hsla(" h "," s "%," l "%," a ")")))

(defn save! [ctx] (.save ctx))

(defn restore! [ctx] (.restore ctx))

(defn translate! [ctx x y] (.translate ctx x y))

(defn fill-style! [ctx color]
  (set! (.-fillStyle ctx) (apply hsla color)))

(defn clear-rect! [ctx x y w h] (.clearRect ctx x y w h))

(defn fill-rect! [ctx x y w h] (.fillRect ctx x y w h))
(defn stroke-rect! [ctx x y w h] (.strokeRect ctx x y w h))

(def deg360 (* 2 (.-PI js/Math)))
(defn fill-circle! [ctx x y r]
  (doto ctx
    (.beginPath)
    (.arc x y r 0 deg360 true)
    (.fill)))

(defn stroke-circle! [ctx x y r]
  (doto ctx
    (.beginPath)
    (.arc x y r 0 deg360 true)
    (.stroke)))

(defn font
  "Returns a string with the font parsed."
  [font style size] (str style " " size "pt " font))

(defn font! [ctx family style size]
  (set! (.-font ctx) (font family style size)))

(defn text-align! [ctx align]
  (set! (.-textAlign ctx) align))

(defn fill-text! [ctx text x y] (.fillText ctx text x y))

(defn request-animation-frame [f] (js/requestAnimationFrame f))
