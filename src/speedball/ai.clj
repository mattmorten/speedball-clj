(ns speedball.ai
  (:require [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.game :as game]
            [speedball.core :as core]))



(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)



(def RandomWalkIntention [:map
                          [:name [:enum :random-walk]]])

(defn new-random-walk-intention
  []
  {:name :random-walk})

(mc/=> new-random-walk-intention [:=> [:cat ] RandomWalkIntention])

(defn produce-random-walk-action [game player-n]
  (let [random (rand-int 4)
        direction (case random
                    0 :north
                    1 :east
                    2 :south
                    3 :west)]
    (game/new-move-player-action player-n direction)))

(defn produce-action
  [intention game player-n]
  (case (:name intention)
    :random-walk (produce-random-walk-action game player-n)))
