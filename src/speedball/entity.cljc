(ns speedball.entity
  (:require [speedball.core :as core]
            [speedball.physics.bounding :as bounding]))

(def Entity
  [:map
   [:position core/Position]
   [:bounding bounding/Bounding]
   [:symbol [:keyword]]])

(comment

  "This is a Rich Comment Form - wrap experimental code, journal notes,
   test data etc in a comment. This means it won't make it into final code,
   but can still be eval'd in the REPL"

  (defn new-entity []
    {:position [1 2]
     :bounding {:dimensions [2 2]}
     :symbol :x})

  (new-entity))



