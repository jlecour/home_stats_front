(function () {
  'use strict';

  App.Metric = DS.Model.extend({
    datetime: DS.attr('date'),
    type: DS.attr('string'),
    value: DS.attr('number')
  });

})();