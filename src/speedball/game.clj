(ns speedball.game
  (:require [clojure.string :as str]
            [clojure.pprint :as pprint]
            [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]
            [speedball.player :as player]
            [speedball.board :as board]
            [speedball.ball :as ball]
            [speedball.camera :as camera]
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
    :players [(player/new-player)
              (player/new-player {:position [6 6]})
              (player/new-player {:position [6 7]})
              (player/new-player {:position [15 9]})]
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


;; Player stuff
(defn team-player->player-n [game team-n player-within-team-n]
  (+ team-n (* (:teams game) player-within-team-n)))
(defn player-n->team-player [game player-n]
  {:team-n (mod player-n (:teams game))
   :player-within-team (int (Math/floor (/ player-n (:teams game))))})


;;
;; Game
(defn player-n [game player-n]
  (-> game :players (nth player-n)))

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

(defn number-of-players [game]
  (-> game :players count))

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
        (assoc-in [:ball :position] player-position)
        (update-in [:ball] physics/cancel-movement))))
(mc/=> player-picks-up-ball [:=> [:cat Game core/Index] Game])

(defn player-drops-ball [game player-n]
  (assoc-in game [:players player-n :holding-ball?] false))
(mc/=> player-drops-ball [:=> [:cat Game core/Index] Game])




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

(defn throw-ball [game player-number]
  (let [{:keys [facing]} (player-n game player-number)
        movement-fn (partial physics/init-movement facing board/board-size)]
    (update-in (player-drops-ball game player-number) [:ball] movement-fn)))

(defn wait-one-second [game]
  (update-in game [:ball] physics/increment-movement))



;; Player Atomic Actions
(def MovePlayerAction [:map
                       [:name [:enum :move-player]]
                       [:player-n core/Index]
                       [:direction core/Direction]])

(defn new-move-player-action [player-n direction]
  {:name :move-player
   :player-n player-n
   :direction direction})

(mc/=> new-move-player-action [:=> [:cat core/Index core/Direction] MovePlayerAction])

(defn apply-action
  [game action]
  (case (:name action)
    :move-player (let [{:keys [player-n direction]} action]
                   (move-player-in-game game player-n direction))))


(defn apply-all-actions
  [game actions]
  (reduce
    (fn [game action] (apply-action game action))
    game
    actions))