(defproject cnake "0.1.0-SNAPSHOT"
  :description "Browser snake game"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cnake"
              :source-paths ["src"]
              :compiler {
                :output-to "cnake.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "cnake-prod"
              :source-paths ["src"]
              :compiler {
                :output-to "cnake-prod.js"
                :optimizations :advanced}}]})
