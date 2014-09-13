(function () {
  'use strict';

  window.App = Ember.Application.create();

  App.ApplicationSerializer = DS.LSSerializer.extend();
  App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'home-stats'
  });

})();