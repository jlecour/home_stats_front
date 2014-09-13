(function () {
  'use strict';

  App.Router.map(function() {
    this.resource('form');
    this.resource('metrics');
  });

  App.ApplicationRoute = Ember.Route.extend({
    model: function() {
      this.store.push('metric', {
        id: "123456-water",
        datetime: '2014-08-19T14:20:45Z',
        type: "water",
        value: 20
      });
      this.store.push('metric', {
        id: "123456-hp",
        datetime: '2014-08-19T14:21:45Z',
        type: "power-hp",
        value: 30
      });
      this.store.push('metric', {
        id: "123456-hc",
        datetime: '2014-08-19T14:22:45Z',
        type: "power-hc",
        value: 12
      });
    }
  });

  App.MetricsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('metric');
    }
  });
})();