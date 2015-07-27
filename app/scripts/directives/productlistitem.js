'use strict';

/**
 * @ngdoc directive
 * @name webshopAngularApp.directive:productListItem
 * @description
 * # productListItem
 */
angular.module( 'webshopAngularApp' )
  .directive( 'productListItem', function( ) {
    return {
      templateUrl: 'views/partials/productlistitem.html',
      restrict: 'A',
      link: function postLink( scope, element, attrs ) {
        
      }
    } ;
  } ) ;
