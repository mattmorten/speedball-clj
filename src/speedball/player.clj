(ns speedball.player
  (:require [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]
            [speedball.board :as board]))


(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def Player
  [:map
   {:closed true}
   [:position core/Position]
   [:holding-ball? :boolean]])

(defn add-player-position [player-position direction]
  (core/add-vectors player-position (-> core/directions direction)))

(mc/=> add-player-position [:=> [:cat core/Position core/Direction] core/Position])

(defn move-player [player direction board]
  (let [new-position (add-player-position (core/position player) direction)]
    (if (board/valid-position? new-position board)
      (assoc player :position new-position)
      player)))
(mc/=> move-player [:=> [:cat Player core/Direction board/Board] Player])

(defn generate-player
  ([]
   {:position [2 2]
    :holding-ball? false})
  ([arg]
   (merge (generate-player) arg)))