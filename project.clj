(defproject cnake "0.1.0-SNAPSHOT"
  :description "Browser snake game"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.189"]
                 [org.clojure/core.async "0.2.374"]]

  :plugins [[lein-cljsbuild "1.1.2"]]

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
