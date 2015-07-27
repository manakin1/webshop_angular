'use strict';

/**
 * @ngdoc directive
 * @name webshopAngularApp.directive:ProductDetails
 * @description
 * # ProductDetails
 */
angular.module( 'webshopAngularApp' )
  .directive( 'productDetails', function( ) {
    return {
      restrict: 'A',
      templateUrl: 'views/partials/productdetails.html',
      link: function postLink( scope, element, attrs ) {
        
      }
    } ;
  } ) ;
