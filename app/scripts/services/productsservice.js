'use strict';

/**
 * @ngdoc service
 * @name webshopAngularApp.ProductsService
 * @description
 * # ProductsService
 * Service in the webshopAngularApp.
 */
angular.module( 'webshopAngularApp' )
  .service( 'ProductsService', [ 'AppConfig', '$http', '$q',
   function( AppConfig, $http, $q ) {

  	var self = this ;

  	self.products = [] ;
  	self.selectedProduct = {} ;
  	self.total = 0 ;


    /**
     * Loads the product list
     */
  	self.getProductList = function( ) {

  		var query_str = AppConfig.PRODUCTS_API_URL  ;

  		return $http.get( query_str )
  			.then( function( response ) {
  				if( typeof response.data === 'object' ) {
  					self.products = response.data.items ;
  					return $q.resolve( response.data ) ;
  				}

  				else { return $q.reject( AppConfig.errors.PRODUCTS_NOT_LOADED ) ; }
  			},

  			function( ) {
  				return $q.reject( AppConfig.errors.PRODUCTS_NOT_LOADED ) ;
  			} 
  		) ;

  	} ;


    /**
     * Adds an item to the cart
     * @param {object} item - The item to be added
     */
  	self.addItem = function( item ) {
  		if( item.stock === 0 ) { return ; }
  		if( !item.inCart ) { item.inCart = 0 ; }

    	item.stock-- ;
    	item.inCart++ ;
    	self.updateTotal( ) ;
  	} ;


    /**
     * Removes one instance of an item from the cart
     * @param {object} item - The item to be subtracted
     */
  	self.subtractItem = function( item ) {
  		item.stock++ ;
  		item.inCart-- ;
  		self.updateTotal( ) ;
  	} ;


    /**
     * Removes all instances of an item from the cart
     * @param {object} item - The item to be removed
     */
  	self.removeItem = function( item ) {
  		item.stock = item.stock + item.inCart ;
  		item.inCart = 0 ;
  		self.updateTotal( ) ;
  	} ;


    /**
     * Updates the subtotal of all items in the cart
     */
  	self.updateTotal = function( ) {
  		var sum = 0 ;
  		for( var i in self.products ) {
  			var item = self.products[i] ;
  			sum += item.price * ( item.inCart || 0 ) ;
  		}
  		self.total = sum ;
  	} ;


    /**
     * Unselects the currently selected product
     */
  	self.unselectProduct = function( ) {
  		self.selectedProduct = {} ;
  	} ;


    /**
     * Sets an item to be the currently selected item
     * @param {object} item - The item to be selected
     */
  	self.selectProduct = function( item ) {
  		if( self.products.indexOf( item ) === -1 ) { return false ; }
  		self.selectedProduct = item ;
  		return true ;
  	} ;


    /**
     * Selects a product by the id
     * @param {string} id - The id of the item to be selected
     */
  	self.selectProductById = function( id ) {
  		for( var i in self.products ) {
  			var item = self.products[i] ;
  			if( parseInt( item.id ) === parseInt( id ) ) {
  				self.selectProduct( item ) ;
  			}
  		}
  	} ;
 
    
  } ] ) ;
