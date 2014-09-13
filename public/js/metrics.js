"use strict";

function prepare_metric(form) {
  var datetime = form.find("input[name='datetime']");
  var type = form.find("input[name='type']:checked");
  var value = form.find("input[name='value']");
  
  function valid() {
    if (!metric.datetime) {
      console.error("Il n'y a pas de date", metric)
      return false
    } else if (!metric.type) {
      console.error("Il n'y a pas de type", metric)
      return false
    } else if (!metric.value) {
      console.error("Il n'y a pas de valeur", metric)
      return false
    } else {
      return true
    }
  }
  
  return {
    datetime: datetime.val(),
    type: type.val(),
    value: value.val(),
    valid: valid
  };
}

function log_metric(metric) {
  console.dir(metric);
}

function store_metric(metric) {
  var key = metric.datetime + '-' + metric.type;
  var value = JSON.stringify(metric);
  console.log(key);
  console.log(value);

  localforage.setItem(key, value).then(function() {
    console.log("Stored " + key + ": " + value);
  });
  
}