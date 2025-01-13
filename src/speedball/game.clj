(ns speedball.game
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

(def Game
  [:map
   [:board board/Board]
   [:players [:vector player/Player]]
   [:teams [:int]]
   [:ball ball/Ball]
   [:goals [:vector core/Index]]])

(defn new-game
  ([]
   {:board (board/generate-board)
    :players [(player/generate-player)
              (player/generate-player {:position [6 6]})
              (player/generate-player {:position [7 1]})]
    :teams 2
    :ball (ball/generate-ball)
    :goals [0 0]})
  ([arg] (merge (new-game) arg)))
(mc/=>
  new-game
  [:function
   [:=> [:cat] Game]
   [:=> [:cat [:map]] Game]])

(defn which-team [game player-n]
  (mod player-n (-> game :teams)))

;;
;; Game
(defn player-position [game player-n] (-> game :players (nth player-n) :position))
(mc/=> player-position [:=> [:cat Game core/Index] core/Position])

(defn ball-position [game] (-> game :ball :position))
(mc/=> ball-position [:=> [:cat Game] core/Position])

(defn player-has-ball?
  ([game player-n]
   (-> game :players (nth player-n) :holding-ball?))
  ([game]
   (true? (some :holding-ball? (-> game :players)))))
(mc/=>
  player-has-ball?
  [:function
   [:=> [:cat Game core/Index] :boolean]
   [:=> [:cat Game] :boolean]])

(defn which-player-n-has-ball [game]
  (some->> game
           :players
           (map-indexed (fn [idx item] [idx item]))
           (filter (fn [[_ player]] (:holding-ball? player)))
           ;; Only get the first player that has the ball, if any
           (first)
           ;; Get the index value, not the player itself
           (first)))
(mc/=> which-player-n-has-ball [:=> [:cat Game] [:maybe core/Index]])


(defn move-player-in-game [game player-n direction]
  (let [game (update-in game [:players player-n] #(player/move-player % direction (:board game)))]
    (if (player-has-ball? game player-n)
      (let [player-position (player-position game player-n)]
        (assoc-in game [:ball :position] player-position))
      game)))
(mc/=> move-player-in-game [:=> [:cat Game core/Index core/Direction] Game])

(defn player-picks-up-ball [game player-n]
  (let [player-position (player-position game player-n)]
    (-> game
        (assoc-in [:players player-n :holding-ball?] true)
        (assoc-in [:ball :position] player-position))))
(mc/=> player-picks-up-ball [:=> [:cat Game core/Index] Game])

(defn player-drops-ball [game player-n]
  (assoc-in game [:players player-n :holding-ball?] false))
(mc/=> player-drops-ball [:=> [:cat Game core/Index] Game])


(defn render-player [game player-n]
  (let [player-has-ball (-> game (player-has-ball? player-n))
        player-doesnt-have-ball (not player-has-ball)
        player-on-top-of-ball (= (player-position game player-n) (ball-position game))]
    (cond
      (and player-doesnt-have-ball player-on-top-of-ball) :j
      player-has-ball (board/player-tile-holding-ball player-n)
      player-doesnt-have-ball (board/player-tile player-n))))

(defn render [game]
  (let [[ball-y ball-x] (ball-position game)
        player-has-ball (-> game (player-has-ball?))
        player-doesnt-have-ball (not player-has-ball)
        game (cond-> game
                     player-doesnt-have-ball (assoc-in [:board ball-y ball-x] :o))]
    ;; Recursively render the players
    (loop [game game
           players (:players game)
           player-n 0]
      (if (empty? players)
        game
        (let [player (first players)
              [player-y player-x] (:position player)
              game (assoc-in game [:board player-y player-x] (render-player game player-n))]
          (recur game (rest players) (inc player-n)))))))



(defn is-ball-in-goal? [game]
  (let [ball-position (ball-position game)
        tile (board/tile-at (:board game) ball-position)]
    (board/is-goal-tile? tile)))

(defn do-goal-things [game]
  ;; todo - goal detection
  (let [team-n 0
        player-maybe-n (which-player-n-has-ball game)]
    (cond-> game
            true (update-in [:goals team-n] inc)
            true (assoc-in [:ball :position] (board/center))
            true (update-in [:ball] physics/cancel-movement)
            (some? player-maybe-n) (player-drops-ball player-maybe-n))))

(defn evaluate-game-for-goal [game]
  (if (and (is-ball-in-goal? game))
    (do-goal-things game)
    game))
(mc/=> evaluate-game-for-goal [:=> [:cat Game] Game])

(defn throw-ball [game player-n]
  (update-in (player-drops-ball game player-n) [:ball] physics/init-movement))

(defn wait-one-second [game]
  (update-in game [:ball] physics/increment-movement))


(defn run-loop []
  (loop [game (new-game)] ;; Start with an initial state
    (println "Current state:" (pprint/pprint (render game)))
    (println "Enter a key (w|a|s|d: move, f: pick up ball, g: drop ball):")
    (let [input (str/trim (read-line))]
      (cond
        (= input "x") (do
                        (println "Exiting loop.")
                        nil) ;; Quit the loop
        (= input "w") (recur (evaluate-game-for-goal (move-player-in-game game 0 :north))) ;; Increment state
        (= input "a") (recur (evaluate-game-for-goal (move-player-in-game game 0 :west)));; Increment state
        (= input "s") (recur (evaluate-game-for-goal (move-player-in-game game 0 :south))) ;; Increment state
        (= input "d") (recur (evaluate-game-for-goal (move-player-in-game game 0 :east)));; Increment state
        (= input "f") (recur (evaluate-game-for-goal (player-picks-up-ball game 0))) ;; Increment state
        (= input "g") (recur (evaluate-game-for-goal (player-drops-ball game 0))) ;; Incre)ment state
        (= input "h") (recur (evaluate-game-for-goal (throw-ball game 0)))
        (= input "e") (recur (evaluate-game-for-goal (wait-one-second game)))
        :else (do
                (println "Invalid key. Try again.")
                (recur game)))))) ;; Continue with the current state


(-> (new-game {:players [(player/generate-player)
                         (player/generate-player {:position [0 3]})]})
    (player-picks-up-ball  1)
    (evaluate-game-for-goal)
    (render))

(-> (new-game)
    (move-player-in-game 0 :east)
    ;(player-picks-up-ball 0)
    (move-player-in-game 0 :south)
    (move-player-in-game 0 :south)
    (move-player-in-game 2 :east)
    ;(move-player-in-game 0 :east)
    ;(player-picks-up-ball 0)
    ;(player-drops-ball 0)
    ;(move-player-in-game 0 :west )
    ;(move-player-in-game 0 :east )
    ;(player-picks-up-ball 0)
    ;(move-player-in-game 0 :north )
    ;(move-player-in-game 0 :north )
    ;(move-player-in-game 0 :north )
    ;(move-player-in-game 0 :north )
    ;(evaluate-game-for-goal)
    ;(move-player-in-game 0 :south )
    ;(evaluate-game-for-goal)
    ;(move-player-in-game 0 :north )
    ;(evaluate-game-for-goal)
    render

    :board)
;(move-player-in-game :east)
;render
;:board)