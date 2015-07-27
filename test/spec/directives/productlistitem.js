'use strict';

describe('Directive: productListItem', function () {

  // load the directive's module
  beforeEach(module('webshopAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-list-item></product-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productListItem directive');
  }));
});
