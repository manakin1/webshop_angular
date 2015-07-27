'use strict';

/**
 * @ngdoc directive
 * @name webshopAngularApp.directive:cart
 * @description
 * # cart
 */
angular.module('webshopAngularApp')
  .directive('cart', function () {
    return {
      restrict: 'A',
      templateUrl: 'views/partials/cartcontent.html',
      link: function postLink( scope, element, attrs ) {
      	
      } 
    } ;
  } ) ;
