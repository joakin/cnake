(ns cnake.utils.dom)

(defn by-id [id]
  (.getElementById js/document id))