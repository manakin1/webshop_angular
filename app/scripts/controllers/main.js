'use strict';

/**
 * @ngdoc function
 * @name webshopAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webshopAngularApp
 */
angular.module( 'webshopAngularApp' )
  .controller( 'MainCtrl', [ 'AppConfig', 'Utils', 'ProductsService', '$scope', '$q', '$routeParams',
  	function( AppConfig, Utils, ProductsService, $scope, $q, $routeParams ) {

  	var self = this ;
  	self.model = ProductsService ;
  	self.layout = 'list' ;
  	self.errorMessage = '' ;


  	/**
     * All initial loading and bootstrapping will happen here
     */
  	self.initialize = function( ) {
  		Utils.log( 'MainCtrl.initialize' ) ;
  		if( !ProductsService.products.length ) {
  			self.getProducts( ) ;
  		}

  		else { self.productsLoadHandler( ) ; }
  	} ;


  	/**
     * Gets the list of products from ProductsService
     */
  	self.getProducts = function( ) {
  		return $q( function( resolve, reject ) {
	  		ProductsService.getProductList( )
	  			.then( function( data ) {
	  				Utils.log( 'MainCtrl.getProducts: retrieved product list: ' + data ) ;	
	  				self.errorMessage = '' ;
	  				self.productsLoadHandler( ) ;
	  				
	  			}, function( error ) {
	  				self.productsLoadFailHandler( error ) ;
	  				reject( error ) ;
	  			}
	  		) ;
		  	
  		} ) ;
  	} ;


  	/**
     * Called when products list has been loaded successfully
     */
  	self.productsLoadHandler = function( ) {
  		if( $routeParams.productid ) {
			self.model.selectProductById(  $routeParams.productid ) ;
		}
  	} ;


  	/**
     * Called when products list has failed to load
     * @param {object} error - The error message returned from the service
     */
  	self.productsLoadFailHandler = function( error ) {
  		self.errorMessage = error ;
  	} ;


  	/**
     * Change the list layout
     * @param {string} layout - The identifier of the new layout
     */
  	self.changeLayout = function( layout ) {
  		if( layout === self.layout ) { return ; }

  		// check the new value against the list of valid layouts in AppConfig
  		if( AppConfig.LAYOUT_OPTIONS.indexOf( layout ) !== -1 ) {
  			self.layout = layout ;
  		}
  	}


  	self.initialize( ) ;

  } ] ) ;
