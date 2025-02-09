(ns speedball.renderer.camera-mount
  (:require [clojure.string :as str]
            [clojure.pprint :as pprint]
            [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]
            [speedball.game :as game]
            [speedball.player :as player]
            [speedball.board :as board]
            [speedball.camera :as camera]
            [speedball.ball :as ball]
            [speedball.physics.physics :as physics]))

(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

;;
;; Mount
;;
(def TrackingState
  [:map
   [:player core/Index]
   [:object [:enum :player :ball]]])
(def CameraMount
  [:map
   [:camera camera/Camera]
   [:state [:enum :tracking]]
   [:details TrackingState]])

(defn new-camera-mount []
  {:camera (camera/new-camera)
   :state :tracking
   :details {:object :ball
             :player 0}})

(mc/=> new-camera-mount [:=> [:cat] CameraMount])

(defn mount-state [camera-mount] (:state camera-mount))

(defn tracking-subject-position
  [camera-mount game]
  (case (-> camera-mount :details :object)
    :player (game/player-position game (-> camera-mount :details :player))
    :ball (game/ball-position game)))

(defn run-tracking
  [camera-mount game]
  (let [tracking-subject-position (tracking-subject-position camera-mount game)
        camera (:camera camera-mount)
        minimum-bounds [0 0]
        maximum-bounds (core/subtract-vectors board/board-size (camera/dimensions camera))]
    (update-in
      camera-mount
      [:camera]
      (fn [old-camera] (camera/center-to old-camera tracking-subject-position minimum-bounds maximum-bounds)))))

(mc/=> run-tracking [:=> [:cat CameraMount game/Game] CameraMount])

(defn evaluate-camera-mount-for-game
  [camera-mount game]
  (case (mount-state camera-mount)
    :tracking (run-tracking camera-mount game)))

(mc/=> evaluate-camera-mount-for-game [:=> [:cat CameraMount game/Game] CameraMount])

(defn track-player
  [camera-mount player-n]
  (-> camera-mount
      (assoc :state :tracking)
      (assoc-in [:details :object] :player)
      (assoc-in [:details :player] player-n)))

(defn track-ball
  [camera-mount]
  (-> camera-mount
      (assoc :state :tracking)
      (assoc-in [:details :object] :ball)))

(defn toggle-player-on-camera
  [camera-mount game]
  (let [number-of-players (game/number-of-players game)
        existing-player (-> camera-mount :details :player)]
    (track-player camera-mount (mod (inc existing-player) number-of-players))))

;;
;; Rendering
;;
(defn render-row
  [camera rendered-board-row]
  (let [[_ x] (core/position camera)
        width (:width camera)
        sub (subvec rendered-board-row x)]
    (vec (take width (concat sub (repeat :0))))))

;; Guards are weird! They have an extra surrounding square bracket
(defn -render-row-guard
  [[[camera _] result]]
  (= (:width camera) (count result)))
(mc/=> render-row [:=> [:cat camera/Camera board/Row] board/Row [:fn -render-row-guard]])

(defn render-camera
  [camera rendered-board]
  (let [[y _] (core/position camera)
        height (:height camera)
        sub (subvec rendered-board y)
        board-width (-> rendered-board first count)]
    (vec (map
           (fn [row]
             (render-row camera row))
           (take height (concat sub (repeat (vec (repeat board-width :0)))))))))
(mc/=> render-camera [:=> [:cat camera/Camera board/Board] board/Board])




(defn render-camera-mount
  [camera-mount rendered-board]
  (render-camera (:camera camera-mount) rendered-board))

(render-camera
  {:width 3 :height 2 :position [6 3]}
  [[:n :n :n :n :n]
   [:w :. :. :. :e]
   [:w :. :. :. :e]
   [:w :. :. :. :e]
   [:w :. :. :. :e]
   [:s :s :s :s :s]])