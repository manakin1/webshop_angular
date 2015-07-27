'use strict';

/**
 * @ngdoc function
 * @name webshopAngularApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the webshopAngularApp
 */
angular.module( 'webshopAngularApp' )
  .controller( 'ProductCtrl', [ 'ProductsService', '$location', function( ProductsService, $location ) {

  	var self = this ;
  	self.model = ProductsService ;


  	self.close = function( ) {
  		self.model.unselectProduct( ) ;
  		$location.path( '/' ) ;
  	}


  	self.addToCart = function( item ) {
  		self.model.addItem( item ) ;
  	}


  } ] ) ;
