(ns speedball.physics.bounding
  (:require [speedball.core :as core]
            [malli.instrument :as mi]
            [clojure.test :as t]
            [malli.core :as mc]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def Bounding
  [:map
   [:dimensions core/Position]])

(def Boundable
  [:map
   [:position core/Position]
   [:bounding Bounding]])

(defn new-bounding [dimensions]
  {:dimensions dimensions})

(mc/=> new-bounding [:=> [:cat core/Position] Bounding])

(defn -boundable-collision?
  [operator b1 b2]
  (let [position1 (:position b1)
        dimensions1 (-> b1 :bounding :dimensions)
        position2 (:position b2)
        dimensions2 (-> b2 :bounding :dimensions)
        [y1min x1min] position1
        [y2min x2min] position2
        [y1max x1max] (core/add-vectors position1 dimensions1)
        [y2max x2max] (core/add-vectors position2 dimensions2)
        ;; Todo - change when we start having center-defined roots
        clear-x? (or (operator x1max x2min)
                     (operator x2max x1min))
        clear-y? (or (operator y1max y2min)
                     (operator y2max y1min))]
    (not (or clear-x? clear-y?))))

(defn collision? [b1 b2] (-boundable-collision? <= b1 b2))
(defn touching? [b1 b2] (-boundable-collision? < b1 b2))

(mc/=> collision? [:=> [:cat Boundable Boundable] [:boolean]])

(defn -boundable [pos dim] {:position pos :bounding {:dimensions dim}})

(t/testing "boundable collision"
  (t/is (true? (collision?
                 (-boundable [0 1] [2 2])
                 (-boundable [1 2] [2 2]))))
  (t/is (true? (collision?
                 (-boundable [0 0] [9 9])
                 (-boundable [1 2] [1 1]))))
  (t/is (false? (collision?
                  (-boundable [0 1] [2 2])
                  (-boundable [2 3] [2 2])))))

(defn wall-boundable
  [board-size orientation]
  (let [[board-y board-x] board-size]
    (case orientation
      :west (-boundable [1 0] [(- board-y 2) 1])
      :east (-boundable [1 (- board-x 1)] [(- board-y 2) 1])
      :north (-boundable [0 0] [1 board-x])
      :south (-boundable [(- board-y 1) 0] [1 board-x]))))

(t/testing "walls"
  (t/is (= (-boundable [0 0] [1 10])
           (wall-boundable [5 10] :north)))
  (t/is (= (-boundable [4 0] [1 10])
           (wall-boundable [5 10] :south)))
  (t/is (= (-boundable [1 0] [3 1])
           (wall-boundable [5 10] :west)))
  (t/is (= (-boundable [1 9] [3 1])
           (wall-boundable [5 10] :east))))

