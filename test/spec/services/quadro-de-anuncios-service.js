'use strict';

describe('Service: quadroDeAnunciosService', function () {

  // load the service's module
  beforeEach(module('boardApp'));

  // instantiate service
  var quadroDeAnunciosService;
  beforeEach(inject(function (_quadroDeAnunciosService_) {
    quadroDeAnunciosService = _quadroDeAnunciosService_;
  }));

  it('should do something', function () {
    expect(!!quadroDeAnunciosService).toBe(true);
  });

});
