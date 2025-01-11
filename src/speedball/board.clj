(ns speedball.board
  (:require
    [speedball.core :as core]
    [malli.core :as mc]
    [malli.instrument :as mi]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def board-size [10 8])

(defn player-tile [i]
  (nth [:1 :2 :3 :4 :5] i))
(defn player-tile-holding-ball [i]
  (nth [:! :& :# :$ :%] i))

(defn is-empty? [tile]
  (or (= tile :.)
      (= tile :*)))

(defn is-goal-tile? [tile]
  (= tile :*))

(defn first-row? [i] (= i 0))
(defn last-row? [i] (= i (-> board-size first dec)))
(defn first-col? [i] (= i 0))
(defn last-col? [i] (= i (-> board-size second dec)))
(defn goal-col? [i]
  (or (= i (-> board-size second (/ 2) dec))
      (= i (-> board-size second (/ 2)))))

(defn generate-empty-board []
  (vec (for [i (range (first board-size))]
         (vec (for [j (range (second board-size))]
                :_)))))

(defn generate-walls [board]
  (vec (for [i (range (first board-size))]
         (vec (for [j (range (second board-size))]
                (cond
                  (and (first-row? i) (goal-col? j)) :*
                  (and (last-row? i) (goal-col? j)) :*
                  (first-row? i) :n
                  (last-row? i) :s
                  (first-col? j) :e
                  (last-col? j) :w
                  :else :.))))))

(def Tile [:keyword])
(def Row [:+ Tile])
(def Board [:vector Row])

(defn generate-board []
  (-> (generate-empty-board)
      (generate-walls)))
(mc/=> generate-board [:=> [:cat] Board])


(defn tile-at [board position]
  (let [[position-y position-x] position]
    (-> board (get position-y) (get position-x))))
(mc/=> tile-at [:=> [:cat Board core/Position] Tile])

(defn empty-at? [board position]
  (is-empty? (tile-at board position)))
(mc/=> empty-at? [:=> [:cat Board core/Position] :boolean])

(defn valid-position? [player-position board]
  (empty-at? board player-position))
(mc/=> valid-position? [:=> [:cat core/Position Board] :boolean])
