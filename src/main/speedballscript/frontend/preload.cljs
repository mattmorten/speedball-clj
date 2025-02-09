(ns speedballscript.frontend.preload
  {:dev/always true}
  (:require
    speedballscript.frontend.app ; <---- make sure you include your entry namespace
    [malli.dev.cljs :as dev]))

(dev/start!)