(ns speedball.core
  (:require [malli.core :as mc]
            [malli.instrument :as mi]
            [clojure.test :as t]))



(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(defn map-entry [key val] [key val])

(def Index [:int {:min 0}])
;; Y, X
(def Position [:tuple Index Index])
;; Z, Y, X
(def Position3 [:tuple Index Index Index])
(def Positions [:+ Position])
(def Positions3 [:+ Position3])


(def Positionable [:map
                   [:position Position]])

(defn d3? [position] (= 3 (count position)))
(defn d2? [position] (= 2 (count position)))

(defn position->3 [z position]  (into [] (cons z position)))
(defn position->2 [position] (if (d2? position) position (into [] (rest position))))

(t/is (= [2 3 4] (position->3 2 [3 4])))

(defn x-of [position] (last position))
(defn y-of [position] (if (d2? position)
                          (first position)
                          (second position)))
(defn z-of [position] (first position))
(mc/=> x-of [:=> [:cat [:or Position Position3]] Index])
(mc/=> y-of [:=> [:cat [:or Position Position3]] Index])
(mc/=> z-of [:=> [:cat Position3] Index])


(t/is (= 1 (z-of [1 2 3])))
(t/is (= 2 (y-of [1 2 3])))
(t/is (= 3 (x-of [1 2 3])))
(t/is (= 2 (y-of [2 3])))
(t/is (= 3 (x-of [2 3])))

(def directions
  {:west [0 -1]
   :east [0 1]
   :south [1 0]
   :north [-1 0]})

(def direction->angle
  {:south 0
   :southeast 45
   :east 90
   :northeast 135
   :north 180
   :northwest 225
   :west 270
   :southwest 315})


(defn vectors-any-lt
  "Any component is less than the other"
  [[a1 a2] [b1 b2]]
  (or (< a1 a2) (< b1 b2)))



(defn add-vectors [& vecs]
  (vec (apply map + vecs)))

(defn subtract-vectors [vec1 vec2]
  (vec (apply map - [vec1 vec2])))

(defn half-vector [pos2]
  (let [[y x] pos2]
    [(int (Math/floor (/ y 2)))
     (int (Math/floor (/ x 2)))]))

(t/is (= [1 1] (half-vector [2 2])))
(t/is (= [1 1] (half-vector [3 3])))
(t/is (= [2 2] (half-vector [4 4])))


(defn max-of-vector-elements [& vectors]
  (apply mapv max vectors))

(defn min-of-vector-elements [& vectors]
  (apply mapv min vectors))

(defn distance
  "Calculates the straight-line (Euclidean) distance between two 2D vectors."
  [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (Math/pow (- x2 x1) 2)
                (Math/pow (- y2 y1) 2))))


(defn map-2d-with-positions
  "Produces a map from position to item in the 2d vector"
  [two-d-like]
  (->> two-d-like
       (map-indexed (fn [row-idx row]
                      (->> row
                           (map-indexed (fn [col-idx texture-tile]
                                          [[row-idx col-idx] texture-tile])))))
       (apply concat)
       (reduce (fn [accum [pos texture]] (assoc accum pos texture)) {})))


(t/is (= {[0 0] :a [0 1] :b
          [1 0] :c [1 1] :d}
         (map-2d-with-positions [[:a :b]
                                 [:c :d]])))

(defn position [thing] (:position thing))

(def Direction [:enum :north :east :south :west :northeast :northwest :southeast :southwest])






