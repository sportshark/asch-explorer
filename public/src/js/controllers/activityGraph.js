'use strict';

angular.module('asch_explorer.tools').controller('ActivityGraph',
  function (activityGraph, $scope) {
      activityGraph($scope);
  });
