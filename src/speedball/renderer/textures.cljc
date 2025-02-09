(ns speedball.renderer.textures
  (:require [malli.instrument :as mi]
            [malli.core :as mc]
            [speedball.board :as board]
            [speedball.core :as core]
            [clojure.test :as t]))


(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def vert-wall ["||"])
(def horiz-wall ["-"
                 "-"])
(def player ["000"
             "000"
             "000"])
(def player1 ["111"
              "1 1"
              "111"])

(def center ["\\   /"
             " \\ / "
             " / \\ "
             "/   \\"])

(def goal ["|---|"
           "|   |"])

(def ball ["PP"
           "PP"])

(def Texture [:vector :string])
(defn texture-size [texture]
  [(-> texture count)
   (reduce (fn [accum row] (max accum (count row))) 0 texture)])

(mc/=> texture-size [:=> [:cat Texture] core/Position])
(t/is (= [3 4]
         (texture-size ["1"
                        "1234"
                        "12"])))


(def TextureOffset [:tuple [:vector :string] core/Position])
(defn texture-offset [texture offset] [texture offset])

(defn no-xform [static-texture] (texture-offset static-texture [0 0]))
(defn centered [static-texture]
  (let [size (texture-size static-texture)
        center (core/half-vector size)]
    (texture-offset static-texture (core/subtract-vectors [0 0] center))))

(def all-textures
  {:e (no-xform vert-wall)
   :w (no-xform vert-wall)
   :n (no-xform horiz-wall)
   :s (no-xform horiz-wall)
   :0 (no-xform player)
   :1 (no-xform player1)
   :* (no-xform goal)
   :o (centered ball)
   :v (centered center)})


;; Simply a tuple: the thing to paint (the tile) and it's z-value
(def Tile [:string])
(def TileWithZ
  [:tuple Tile core/Index])

(defn tilez [tile z] [tile z])
(defn tilez->tile [tz] (first tz))
(defn tilez->z [tz] (second tz))

(mc/=> tilez->tile [:=> [:cat TileWithZ] Tile])
(mc/=> tilez->z [:=> [:cat TileWithZ] core/Index])

;;
;; Static textures
;;
(defn build-texture-map-for-single-texture
  [texture z abs-position-2]
  (-> texture
      (core/map-2d-with-positions)
      (update-keys (partial core/add-vectors abs-position-2))
      (update-vals str)
      (update-vals (fn [tile] (tilez tile z)))))

(mc/=> build-texture-map-for-single-texture
       [:=> [:cat [:vector :any] core/Index core/Position] [:map-of core/Position TileWithZ]])

(t/is (= {[2 1] ["1" 6] [2 2] ["2" 6] [2 3] ["3" 6]
          [3 1] ["4" 6] [3 2] ["5" 6] [3 3] ["6" 6]}
         (build-texture-map-for-single-texture ["123" "456"] 6 [2 1])))

(defn merge-texture-maps [m1 m2]
  (merge-with
    (fn [value1 value2]
      (let [z1 (tilez->z value1)
            z2 (tilez->z value2)]
        (if (> z1 z2) value1 value2)))
    m1 m2))

(t/is (= {[0 0] ["a" 1], [0 1] ["b" 1]}
         (merge-texture-maps
           {[0 0] ["a" 1], [0 1] ["b" 0]}
           {[0 0] ["a" 0], [0 1] ["b" 1]})))


(defn build-texture-map
  "Root-z allows you to add a constant `z` to every value. Allows it to shift
   all textures away from the floor, for example"
  [root-z textures]
  (let  [textures (-> textures
                      (core/map-2d-with-positions)
                      (update-vals all-textures))]
    (->> textures
         (map (fn [[texture-pos [texture offset]]]
                ;; Skip if this doesn't have a static texture (like the floor)
                (when texture
                  (let [[y x] texture-pos]
                    (build-texture-map-for-single-texture texture (+ y root-z) (core/add-vectors texture-pos offset))))))
         (reduce merge-texture-maps {}))))


(mc/=> build-texture-map
       [:=> [:cat core/Index [:vector [:vector :keyword]]] [:map-of core/Position TileWithZ]])

;;; The z-value is set to the root-y value
;(t/is (= {[0 0] ["-" 10], [0 1] ["-" 10],
;          [1 0] ["-" 10], [1 1] ["0" 11], [1 2] ["0" 11]
;          [2 0] ["|" 12], [2 1] ["|" 12], [2 2] ["0" 11]}
;         (build-texture-map 10 [[:n :n]
;                                [:. :0]
;                                [:e]])))

;(defn collapse-texture-map
;  "Takes all the z-values, declares a winner, removes the losers")

;;
;; Tiled / Repeated
;;
(def floor-texture
  ["  .|"
   "  .|"
   "...+"])

(board/generate-board [9 9])


(defn explode [texture]
  (into [] (for [row texture]
             (into [] (for [tile row]
                        (str tile))))))


(def texture-modifiers #{:standard :mirror :mirror-no-seam})

(defn seek [texture-size modifier n]
  (case modifier
    :standard (mod n texture-size)
    :mirror (let [is-mirror? (= 1 (mod (int (Math/floor (/ n texture-size))) 2))
                  leftover (int (Math/floor (mod n texture-size)))]
              (if is-mirror?
                (- texture-size 1 leftover)
                leftover))
    :mirror-no-seam (let [is-mirror? (= 1 (mod (int (Math/floor (/ n (dec texture-size)))) 2))
                          leftover (int (Math/floor (mod n (dec texture-size))))]
                      (if is-mirror?
                        (- texture-size 1 leftover)
                        leftover))))


(let [input [0 1 2 3 4 5 6 7 8 9]]
  (t/is (= [0 1 2 3 0 1 2 3 0 1] (into [] (map (partial seek 4 :standard) input))))
  (t/is (= [0 1 2 3 3 2 1 0 0 1] (into [] (map (partial seek 4 :mirror) input))))
  (t/is (= [0 1 2 3 2 1 0 1 2 3] (into [] (map (partial seek 4 :mirror-no-seam) input)))))

(defn repeat-texture
  [texture modifier position]
  (let [texture (explode texture)
        rows (count texture)
        cols (count (first texture))
        [y x] position
        texture-row (seek rows modifier y)
        texture-col (seek cols modifier x)]
    (-> texture
        (nth texture-row)
        (nth texture-col))))

;(into [] (for [y (range 12)]
;           (apply str (for [x (range 30)] (repeat-texture floor-texture :mirror-no-seam [y x])))))

(defn repeat-texture->texture-map
  [[rows cols] texture modifier offset z]
  (into {}
    (apply concat (for [y (range rows)]
                    (for [x (range cols)]
                      (let [position [y x]
                            offset-position (core/add-vectors position offset)
                            tile (str (repeat-texture texture modifier offset-position))
                            tilez (tilez tile z)]
                        (core/map-entry position tilez)))))))

(defn render-texture-map
  [[rows cols] m]
  (into [] (for [y (range rows)]
             (apply str (for [x (range cols)]
                          (or (some-> [y x] m tilez->tile) " "))))))

(t/is (= {[0 0] ["-" 0], [0 1] ["-" 0]
          [1 0] ["|" 1], [1 1] ["|" 1]}
         (build-texture-map 0 [[:n :n]
                               [:e :.]])))
(t/is (= ["--"
          "||"]
         (render-texture-map [2 2] (build-texture-map 0 [[:n :n]
                                                         [:e :.]]))))
(board/generate-board [21 11])


(let [dimensions [21 81]
      floor-map (repeat-texture->texture-map dimensions floor-texture :mirror-no-seam [-2 -2] 0)
      board (board/generate-board dimensions)
      board (assoc-in board [8 8] :0)
      board (assoc-in board [12 58] :1)
      board (assoc-in board [13 20] :o)
      board-map (build-texture-map 0 board)
      merged (merge-texture-maps floor-map board-map)]
  ;board-map)
  (render-texture-map (core/add-vectors dimensions [1 1]) merged))
  ;(render-texture-map (core/add-vectors dimensions [1 1]) floor-map))
  ;(render-texture-map [7 7] board-map))


