(ns speedballscript.frontend.app
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [speedball.renderer.camera-mount :as mount]
            [speedball.renderer.renderer :as renderer]
            [speedball.game :as game]))

(js/console.log "yo")
;(println (game/new-game))

(defonce counter (r/atom (renderer/new-game-state)))

;(defn start-timer []
;  (js/setInterval
;    (fn []
;      (swap! counter inc))
;    1000))

(defn rendered-game->div
  [game]
  (vec (cons :div (for [row game]
                    (vec (cons :div (for [col row]
                                      (do
                                        ^{:key (str (rand))} [:span.char col]))))))))


(defn handle-keypress [event]
  (let [key (.-key event)]
    (js/console.log "Pressed " key)
    (when (some #{key} ["w" "a" "s" "d" "f" "g" "h" "e" "c"])
      (let [game-state (renderer/run-game counter key)]
        (reset! counter game-state)))))

(defn app []
  [:div
   [:div
      (let [[game camera-mount controller ai-controllers] @counter]
         (rendered-game->div
           (renderer/render-board game)))]
       ;(rendered-game->div
       ;  (mount/render-camera-mount
       ;    camera-mount
       ;    (renderer/render-board game))))]
   [:button
    {:onClick (fn [] (swap! counter inc))}
    "+1"]])

(defn init []
  (println "Speedball 2")
  (.addEventListener js/document "keydown" handle-keypress)
  ;(start-timer)
  (dom/render
    [app]
    (.getElementById js/document "root")))


;; Switch to a clj-s repl
; (shadow/repl :frontend)

;; Explain an exception in the repl
; (ex-data *e)