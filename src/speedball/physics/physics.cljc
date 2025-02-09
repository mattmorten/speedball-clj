(ns speedball.physics.physics
  (:require [malli.core :as mc]
    [malli.instrument :as mi]
    [speedball.core :as core]))


(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(defn deg-to-rad [degrees]
  (* degrees (/ Math/PI 180)))

(defn position-at-time
  "Calculates the position (x, y) of an object emitted from (x0, y0) at an angle `theta` with initial velocity `v0`.
   `friction-coeff` determines how velocity degrades over time (0 = no friction, 1 = high friction).
   Returns a map with x and y coordinates at time `t`."
  [x0 y0 theta v0 friction-coeff t]
  (let [-friction-coeff (- 0 friction-coeff)
        theta (deg-to-rad theta)
        velocity (max 0 (* v0 (Math/exp (* -friction-coeff t)))) ; Decreasing velocity due to friction
        xt (+ x0 (* v0 (Math/cos theta) (/ (- 1 (Math/exp (* -friction-coeff t))) friction-coeff))) ; Integrated position in x
        yt (+ y0 (* v0 (Math/sin theta) (/ (- 1 (Math/exp (* -friction-coeff t))) friction-coeff)))] ; Integrated position in y
    {:x xt :y yt :v velocity}))

(defn position-to-vec
  [{x :x y :y}]
  [x y])

(defn vec-to-int
  [[x y]]
  [(int x) (int y)])

(defn scale
  [scaling [x y]]
  [(* x scaling) (* y scaling)])


(defn positions
  ([x y theta v0 friction]
   (positions x y theta v0 friction 0))
  ([x y theta v0 friction t]
   (lazy-seq
     (cons (position-at-time x y theta v0 friction t)
           (positions x y theta v0 friction (inc t))))))

(defn handle-min-flip-component
  [board-min-value value]
  (if (< value board-min-value)
    (let [overflow (- board-min-value value)]
      (+ board-min-value overflow))
    value))

(defn handle-max-flip-component
  [board-max-value value]
  (if (> value board-max-value)
    (let [overflow (- value board-max-value)]
      (- board-max-value overflow))
    value))

(defn handle-min-flip
  [[board-min-y board-min-x] [value-y value-x]]
  [(handle-min-flip-component board-min-y value-y)
   (handle-min-flip-component board-min-x value-x)])

(defn handle-max-flip
  [[board-max-y board-max-x] [value-y value-x]]
  [(handle-max-flip-component board-max-y value-y)
   (handle-max-flip-component board-max-x value-x)])

(defn handle-walls
  [board-dimensions position]
  (let [board-max (core/subtract-vectors board-dimensions [2 2])
        board-min [1 1]]
    (loop [position position]
      (let [new-position (->> position
                              (handle-min-flip board-min)
                              (handle-max-flip board-max))]
        (if (not= position new-position)
          (recur new-position)
          new-position)))))



(defn take-until-repeat []
  (fn [rf]
    (let [previous (volatile! -123)]
      (fn
        ([] (rf)) ; Init arity
        ([result] (rf result)) ; Completion arity
        ([result input] ; Step arity
         (if (= @previous input)
           (reduced result) ; Stop early if a repeat is found
           (do
             (vreset! previous input)
             (rf result input))))))))



(defn xform [n start board-dimensions]
  (comp
    (map position-to-vec)
    (map (partial scale 0.1))
    (map vec-to-int)
    (map (partial core/add-vectors start))
    (map (partial handle-walls board-dimensions))
    (take n)))
;(take-until-repeat)))


;(transduce xform conj (positions 0 0 30 20 0.2))

;(defn take-and-remainder [s]
;  [(sequence (xform 1) s) (drop 1 s)])

;(sequence (xform 10) (positions 0 0 30 20 0.2))

(def Movement
  [:map
   [:path core/Positions]
   [:frame core/Index]
   [:length core/Index]
   [:start core/Position]])
(def Moveable
  [:map
   [:position core/Position]
   [:movement [:maybe Movement]]])

(defn init-movement [direction board-dimensions positionable]
  (let [[x y] (:position positionable)
        angle (core/direction->angle direction)]
    (assoc positionable
      :movement {:path (sequence (xform 10 [x y] board-dimensions) (positions x y angle 20 0.2))
                 :frame 0
                 :length 5
                 :start [x y]})))
(mc/=> init-movement [:=> [:cat core/Direction core/Position core/Positionable] Moveable])

(defn cancel-movement [moveable]
  (assoc moveable :movement nil))

(defn increment-movement [moveable]
  (if (some? (:movement moveable))
    (let [movement (:movement moveable)
          next-frame (-> movement :frame inc)
          animation-length (-> movement :length)]
      (if (>= next-frame animation-length)
        (cancel-movement moveable)
        (let [new-position (-> movement :path (nth next-frame))]
          (-> moveable
              (assoc-in [:movement :frame] next-frame)
              (assoc-in [:position] new-position)))))
    moveable))

(mc/=> increment-movement [:=> [:cat Moveable] Moveable])


(->> {:position [2 2]}
     (init-movement :southeast [6 6]))





