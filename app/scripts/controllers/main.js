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


  	self.initialize = function( ) {
  		Utils.log( 'MainCtrl.initialize' ) ;
  		if( !ProductsService.products.length ) {
  			self.getProducts( ) ;
  		}

  		else { self.productsLoadHandler( ) ; }
  	} ;


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


  	self.productsLoadHandler = function( ) {
  		if( $routeParams.productid ) {
			self.model.selectProductById(  $routeParams.productid ) ;
		}
  	}


  	self.productsLoadFailHandler = function( error ) {
  		self.errorMessage = error ;
  	} ;


  	self.initialize( ) ;

  } ] ) ;
