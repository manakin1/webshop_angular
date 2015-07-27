'use strict';

/**
 * @ngdoc overview
 * @name webshopAngularApp
 * @description
 * # webshopAngularApp
 *
 * Main module of the application.
 */
angular
  .module( 'webshopAngularApp', [
    'ngAnimate',
    'ngRoute'
  ] )
  .config( function( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/product/:productid', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  } ) ;
