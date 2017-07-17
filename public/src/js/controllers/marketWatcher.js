'use strict';

angular.module('asch_explorer.tools').controller('MarketWatcher',
  function (marketWatcher, $scope) {
      marketWatcher($scope);
  });
