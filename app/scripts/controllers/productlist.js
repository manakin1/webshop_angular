'use strict';

/**
 * @ngdoc function
 * @name webshopAngularApp.controller:ProductListCtrl
 * @description
 * # ProductListCtrl
 * Controller of the webshopAngularApp
 */
angular.module( 'webshopAngularApp' )
  .controller( 'ProductListCtrl', [ 'ProductsService', 'AppConfig', 'Utils', '$scope', '$location',
  	function( ProductsService, AppConfig, Utils, $scope, $location ) {
    
    var self = this ;

  	self.errorMessage = '' ;
  	self.display = 'list' ;
  	self.model = ProductsService ;


  	self.addToCartHandler = function( item ) {
  		Utils.log( 'ProductListCtrl.addToCart: id: ' + item.id ) ;
  		self.model.addItem( item ) ;
  	} ;

  	self.showProductDetails = function( item ) {
  		if( self.model.selectProduct( item ) ) {
  			Utils.log( 'ProductListCtrl.showProductDetails: ' + item.id ) ;
  			$location.path( '/product/' + item.id ) ;
  		}
  	} ;

  } ] ) ;
