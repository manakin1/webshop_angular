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
  	self.model = ProductsService ;


  	/**
     * Called when the user has taken action to add an item to the cart
     * @param {object} item - The item to be added
     */
  	self.addToCartHandler = function( item ) {
  		Utils.log( 'ProductListCtrl.addToCart: id: ' + item.id ) ;
  		self.model.addItem( item ) ;
  	} ;


  	/**
     * Called when the user has taken action to display the product details
     * @param {object} item - The item to be displayed
     */
  	self.showProductDetails = function( item ) {
  		if( self.model.selectProduct( item ) ) {
  			Utils.log( 'ProductListCtrl.showProductDetails: ' + item.id ) ;
  			$location.path( '/product/' + item.id ) ;
  		}
  	} ;

  } ] ) ;
