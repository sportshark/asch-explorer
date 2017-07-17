'use strict';

angular.module('asch_explorer.tools').controller('NetworkMonitor',
  function (networkMonitor, $scope) {
      networkMonitor($scope);
  });
