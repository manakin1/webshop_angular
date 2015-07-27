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


  	self.addItem = function( item ) {
  		Utils.log( 'CartCtrl.addItem: ' + item.id ) ;
  		self.model.addItem( item ) ;
  	} ;


  	self.subtractItem = function( item ) {
  		Utils.log( 'CartCtrl.subtractItem: ' + item.id ) ;
  		self.model.subtractItem( item ) ;
  	} ;


  	self.removeItem = function( item ) {
  		Utils.log( 'CartCtrl.removeItem: ' + item.id ) ;
  		self.model.removeItem( item ) ;
  	} ;

  
  } ] ) ;
