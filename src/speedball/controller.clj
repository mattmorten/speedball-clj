(ns speedball.controller
  (:require [clojure.string :as str]
            [clojure.pprint :as pprint]
            [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]
            [speedball.game :as game]
            [speedball.ai :as ai]
            [speedball.player :as player]
            [speedball.board :as board]
            [speedball.ball :as ball]
            [speedball.camera :as camera]
            [speedball.physics :as physics]))


(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def Controller
  [:map
   [:team-n core/Index]
   [:who [:enum :human :ai]]
   [:total-teams core/Index]
   [:player-within-team-n core/Index]])

(defn new-human-controller
  []
  {:team-n 0
   :total-teams 2
   :who :human
   :player-within-team-n 0
   :intention nil})

(defn player-n [controller game]
  (game/team-player->player-n game (:team-n controller) (:player-within-team-n controller)))

(mc/=> new-human-controller [:=> [:cat] Controller])

(defn new-ai-controller
  [game player-n]
  (let [{:keys [player-within-team team-n]} (game/player-n->team-player game player-n)]
    {:team-n team-n
     :total-teams 2
     :who :ai
     :player-within-team-n player-within-team
     :intention (ai/new-random-walk-intention)}))

(mc/=> new-ai-controller [:=> [:cat] Controller])



(defn closest-player-n-to-ball-on-controllers-team [controller game]
  (let [ball-position (game/ball-position game)]
    (->> game
         :players
         (map-indexed (fn [index item]
                        [index item]))
         (reduce
           (fn [current-closest [player-n player]]
             ;(println "reducing: " current-closest " [" player-n " " player "]")
             (let [[_ his-distance] current-closest
                   {:keys [team-n]} (game/player-n->team-player game player-n)]
               ;; If this player is on the controller's team
               (if (= team-n (:team-n controller))
                 (let [player-position (game/player-position game player-n)
                       distance (core/distance ball-position player-position)]
                   (if (or (nil? his-distance) (< distance his-distance))
                     [player-n distance]
                     current-closest))
                 current-closest)))
           nil)
         ;; Get the n part
         first)))

(defn evaluate-control [controller game]
  (let [player-n (player-n controller game)
        holding-ball? (game/player-has-ball? game player-n)]
    (if holding-ball?
      controller
      (let [closest-player-n (closest-player-n-to-ball-on-controllers-team controller game)
            {:keys [player-within-team]} (game/player-n->team-player game closest-player-n)]
        (assoc controller :player-within-team-n player-within-team)))))

(defn clear-intention [controller]
  (assoc controller :intention nil))

(defn produce-ai-action
  [controller game]
  (let [player-n (player-n controller game)]
    (some-> (:intention controller)
            (ai/produce-action game player-n))))

(defn produce-ai-actions
  [controllers game]
  (vec (->> controllers
            (map (fn [controller] (produce-ai-action controller game)))
            (filter identity))))


(defn new-ai-controllers
  [game human-controller]
  (let [size (count (:players game))
        human-player-n (player-n human-controller game)]
    (vec
      (for [i (range size)]
        (let [is-human-player? (= i human-player-n)]
          (cond-> (new-ai-controller game i)
                  is-human-player? (clear-intention)))))))
