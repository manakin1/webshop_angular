'use strict';

/**
 * @ngdoc function
 * @name webshopAngularApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the webshopAngularApp
 */
angular.module( 'webshopAngularApp' )
  .controller( 'CartCtrl', [ '$scope', 'AppConfig', 'Utils', 'ProductsService',
  	function( $scope, AppConfig, Utils, ProductsService ) {

  	var self = this ;
  	self.model = ProductsService ;

    /**
     * Adds an item to the cart
     * @param {object} item - The item to be added
     */
  	self.addItem = function( item ) {
  		Utils.log( 'CartCtrl.addItem: ' + item.id ) ;
  		self.model.addItem( item ) ;
  	} ;


    /**
     * Removes one instance of an item from the cart
     * @param {object} item - The item to be subtracted
     */
  	self.subtractItem = function( item ) {
  		Utils.log( 'CartCtrl.subtractItem: ' + item.id ) ;
  		self.model.subtractItem( item ) ;
  	} ;


    /**
     * Removes all instances of an item from the cart
     * @param {object} item - The item to be removed
     */
  	self.removeItem = function( item ) {
  		Utils.log( 'CartCtrl.removeItem: ' + item.id ) ;
  		self.model.removeItem( item ) ;
  	} ;

  
  } ] ) ;
