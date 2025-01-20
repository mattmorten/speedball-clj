(ns speedball.camera
  (:require [clojure.string :as str]
            [clojure.pprint :as pprint]
            [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]
            [speedball.player :as player]
            [speedball.board :as board]
            [speedball.ball :as ball]
            [speedball.physics :as physics]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)


(def Camera
  [:map
   [:width core/Index]
   [:height core/Index]
   [:position core/Position]])

(defn new-camera
  []
  {:width 9
   :height 7
   :position [1 1]})

(mc/=> new-camera [:=> [:cat] Camera])

(defn dimensions [camera]
  [(:height camera) (:width camera)])

(defn -center-relative-to-position
  [camera]
  (let [{:keys [width height]} camera]
     [(int (Math/floor (/ height 2.0))) (int (Math/floor (/ width 2.0)))]))

(defn center [camera]
  (let [[y-relative-center x-relative-center] (-center-relative-to-position camera)
        [y x] (core/position camera)]
    [(+ y y-relative-center) (+ x x-relative-center)]))


;; We will define maximum-bounds as the maximum position the top-left (root) position
;; can be. The caller will do the subtraction to figure that out
(defn center-to [camera desired-position minimum-bounds maximum-bounds]
  (let [amount-to-subtract (-center-relative-to-position camera)
        desired-root (core/subtract-vectors desired-position amount-to-subtract)
        desired-root (core/max-of-vector-elements desired-root minimum-bounds)
        desired-root (core/min-of-vector-elements desired-root maximum-bounds)]
    (assoc camera :position desired-root)))

(mc/=> center-to [:=> [:cat Camera core/Position core/Position core/Position] Camera])

;(center-to
;  {:width 5 :height 3 :position [2 2]}
;  [3 3])







