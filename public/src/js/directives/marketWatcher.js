'use strict';

angular.module('asch_explorer.tools')
  .directive('orders', function () {
      return {
          restrict: 'E',
          scope: {
              orders: '=orders',
              heading: '@heading',
              name: '@name'
          },
          templateUrl: '/views/marketWatcher/orders.html',
          replace: true
      };
  });
