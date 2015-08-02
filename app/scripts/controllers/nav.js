'use strict';

/**
 * @ngdoc function
 * @name webshopAngularApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the webshopAngularApp
 */
angular.module( 'webshopAngularApp' )
  .controller( 'NavCtrl', [ '$location', function( $location ) {
    
    /**
     * Check if the supplied location is the currently active route
     * @param {string} viewLocation - The location string to check
     */
    this.isActive = function( viewLocation ) { 
        return viewLocation === $location.path( ) ;
    } ;

  } ] ) ;
