(defproject cnake "0.1.0-SNAPSHOT"
  :description "Browser snake game"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

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
