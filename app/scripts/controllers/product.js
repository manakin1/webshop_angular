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


    /**
     * Close the product details window
     */
  	self.close = function( ) {
  		self.model.unselectProduct( ) ;
  		$location.path( '/' ) ;
  	} ;


    /**
     * Adds an item to the cart
     * @param {object} item - The item to be added
     */
  	self.addToCart = function( item ) {
  		self.model.addItem( item ) ;
  	} ;


  } ] ) ;
