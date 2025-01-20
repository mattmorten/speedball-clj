(ns speedball.core
  (:require [malli.core :as mc]
            [malli.instrument :as mi]))



(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)


(def Index [:int {:min 0}])
(def Position [:tuple Index Index])
(def Positions [:+ Position])


(def Positionable [:map
                   [:position Position]])

(def directions
  {:west [0 -1]
   :east [0 1]
   :south [1 0]
   :north [-1 0]})




(defn add-vectors [& vecs]
  (vec (apply map + vecs)))

(defn subtract-vectors [vec1 vec2]
  (vec (apply map - [vec1 vec2])))

(defn max-of-vector-elements [& vectors]
  (apply mapv max vectors))

(defn min-of-vector-elements [& vectors]
  (apply mapv min vectors))


(defn position [thing] (:position thing))

(def Direction [:enum :north :east :south :west])






