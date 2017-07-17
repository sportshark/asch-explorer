'use strict';

angular.module ('asch_explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('asch_explorer-currency') || 'XAS';

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('asch_explorer-currency', currency);
      }
    };
  });
