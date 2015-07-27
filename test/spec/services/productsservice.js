'use strict';

describe('Service: ProductsService', function () {

  // load the service's module
  beforeEach(module('webshopAngularApp'));

  // instantiate service
  var ProductsService;
  beforeEach(inject(function (_ProductsService_) {
    ProductsService = _ProductsService_;
  }));

  it('should do something', function () {
    expect(!!ProductsService).toBe(true);
  });

});
