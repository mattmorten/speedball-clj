(ns speedball.renderer.renderer
  (:require [clojure.string :as str]
            [clojure.pprint :as pprint]
            [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.camera :as camera]
            [speedball.renderer.camera-mount :as mount]
            [speedball.core :as core]
            [speedball.player :as player]
            [speedball.game :as game]
            [speedball.board :as board]
            [speedball.ball :as ball]
            [speedball.physics :as physics]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(defn render-player [game player-n]
  (let [player-has-ball (-> game (game/player-has-ball? player-n))
        player-doesnt-have-ball (not player-has-ball)
        player-on-top-of-ball (= (game/player-position game player-n) (game/ball-position game))]
    (cond
      (and player-doesnt-have-ball player-on-top-of-ball) :j
      player-has-ball (board/player-tile-holding-ball player-n)
      player-doesnt-have-ball (board/player-tile player-n))))

(defn render-board [game]
  (let [[ball-y ball-x] (game/ball-position game)
        player-has-ball (-> game (game/player-has-ball?))
        player-doesnt-have-ball (not player-has-ball)
        game (cond-> game
                     player-doesnt-have-ball (assoc-in [:board ball-y ball-x] :o))
        ;; Recursively render the players
        game (loop [game game
                    players (:players game)
                    player-n 0]
               (if (empty? players)
                 game
                 (let [player (first players)
                       [player-y player-x] (:position player)
                       game (assoc-in game [:board player-y player-x] (render-player game player-n))]
                   (recur game (rest players) (inc player-n)))))]
    (:board game)))

(mc/=> render-board [:=> [:cat game/Game] board/Board])

(defn run-loop []
  (loop [game (game/new-game)
         camera-mount (mount/new-camera-mount)] ;; Start with an initial state
    ;; We will do this here simply because I don't want to repeat myself in all the `cond` below!!
    (let [game (game/evaluate-game-for-goal game)
          camera-mount (mount/evaluate-camera-mount-for-game camera-mount game)]
      (println "Board: ")
      (pprint/pprint (render-board game))
      (println "Camera: ")
      (pprint/pprint (->> game render-board (mount/render-camera-mount camera-mount)))
      (println "Game: ")
      (pprint/pprint (dissoc game :board))
      (println "Enter a key:")
      (println "(w|a|s|d: move, f: pick up ball, g: drop ball, h: throw, e: wait, c: toggle cam)")
      (let [input (str/trim (read-line))]
        (cond
          (= input "x") (do
                          (println "Exiting loop.")
                          nil) ;; Quit the loop
          (= input "w") (recur (game/move-player-in-game game 0 :north) camera-mount) ;; Increment state
          (= input "a") (recur (game/move-player-in-game game 0 :west) camera-mount);; Increment state
          (= input "s") (recur (game/move-player-in-game game 0 :south) camera-mount) ;; Increment state
          (= input "d") (recur (game/move-player-in-game game 0 :east) camera-mount);; Increment state
          (= input "f") (recur (game/player-picks-up-ball game 0) camera-mount) ;; Increment state
          (= input "g") (recur (game/player-drops-ball game 0) camera-mount) ;; Incre)ment state
          (= input "h") (recur (game/throw-ball game 0) camera-mount)
          (= input "e") (recur (game/wait-one-second game) camera-mount)
          (= input "c") (recur game (mount/toggle-player-on-camera camera-mount game))

          :else (do
                  (println "Invalid key. Try again.")
                  (recur game camera-mount))))))) ;; Continue with the current state


(-> (game/new-game {:players [(player/generate-player)
                              (player/generate-player {:position [0 3]})]})
    (game/player-picks-up-ball  1)
    (game/evaluate-game-for-goal)
    (render-board))

(-> (game/new-game)
    (game/move-player-in-game 0 :east)
    ;(game/player-picks-up-ball 0)
    (game/move-player-in-game 0 :south)
    (game/move-player-in-game 0 :south)
    (game/move-player-in-game 2 :east)
    ;(game/move-player-in-game 0 :east)
    ;(game/player-picks-up-ball 0)
    ;(game/player-drops-ball 0)
    ;(game/move-player-in-game 0 :west )
    ;(game/move-player-in-game 0 :east )
    ;(game/player-picks-up-ball 0)
    ;(game/move-player-in-game 0 :north )
    ;(game/move-player-in-game 0 :north )
    ;(game/move-player-in-game 0 :north )
    ;(game/move-player-in-game 0 :north )
    ;(game/evaluate-game-for-goal)
    ;(game/move-player-in-game 0 :south )
    ;(game/evaluate-game-for-goal)
    ;(game/move-player-in-game 0 :north )
    ;(game/evaluate-game-for-goal)
    render-board

    :board)
;(move-player-in-game :east)
;render
;:board)
