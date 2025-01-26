(ns speedball.board
  (:require
    [speedball.core :as core]
    [malli.core :as mc]
    [malli.instrument :as mi]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(defn center [board-size]
  (let [[board-x board-y] board-size
        center-x (-> board-x (/ 2) Math/floor int)
        center-y (-> board-y (/ 2) Math/floor int)]
    [center-x center-y]))
(mc/=> center [:=> [:cat core/Position] core/Position])


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
(defn last-row? [board-size i] (= i (-> board-size first dec)))
(defn first-col? [i] (= i 0))
(defn last-col? [board-size i] (= i (-> board-size second dec)))
(defn goal-col? [board-size i]
  (or (= i (-> board-size second (/ 2) Math/floor int dec))
      (= i (-> board-size second (/ 2) Math/floor int dec dec))
      (= i (-> board-size second (/ 2) Math/floor int))
      (= i (-> board-size second (/ 2) Math/floor int inc))))

(defn generate-walls [dimensions]
  (let [[y x] dimensions]
    (vec (for [i (range y)]
           (vec (for [j (range x)]
                  (let [position [i j]]
                    (cond
                      (= position (center dimensions)) :v
                      (and (first-row? i) (goal-col? dimensions j)) :*
                      (and (last-row? dimensions i) (goal-col? dimensions j)) :*
                      (first-row? i) :n
                      (last-row? dimensions i) :s
                      (first-col? j) :e
                      (last-col? dimensions j) :w
                      :else :.))))))))

(def Tile [:keyword])
(def Row [:vector Tile])
(def Board [:vector Row])

(defn generate-board [dimensions]
  (generate-walls dimensions))
(mc/=> generate-board [:=> [:cat core/Position] Board])


(defn tile-at [board position]
  (let [[position-y position-x] position]
    (-> board (get position-y) (get position-x))))
(mc/=> tile-at [:=> [:cat Board core/Position] [:maybe Tile]])

(defn empty-at? [board position]
  (is-empty? (tile-at board position)))
(mc/=> empty-at? [:=> [:cat Board core/Position] :boolean])

(defn valid-position? [player-position board]
  (empty-at? board player-position))
(mc/=> valid-position? [:=> [:cat core/Position Board] :boolean])
