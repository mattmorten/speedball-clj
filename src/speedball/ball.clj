(ns speedball.ball
  (:require [malli.core :as mc]
            [malli.instrument :as mi]
            [speedball.core :as core]))



(mi/instrument!)
((requiring-resolve 'malli.dev/start!))
(mc/function-schemas)

(def Ball [:map
           [:position core/Position]])

(defn generate-ball []
  {:position [4 4]
   :movement nil})





