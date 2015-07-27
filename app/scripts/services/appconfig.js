'use strict';

/**
 * @ngdoc service
 * @name webshopAngularApp.AppConfig
 * @description
 * # appconfig
 * Constant in the webshopAngularApp.
 */
angular.module( 'webshopAngularApp' )
  .constant( 'AppConfig', {

    DEBUG: true,

    PRODUCTS_API_URL: 'data/products.json',
    DISPLAY_OPTIONS: [ 'list', 'grid' ],

    // events

    events: {
  
    },

    // error messages

    errors: {
      PRODUCTS_NOT_LOADED: 'Failed to load product list'
    }

  } ) ;
