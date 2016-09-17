'use strict';

// The hinter will deny a lot of the chai syntax (W030).
/* jshint ignore:start */

// Dependencies.
var swaggerHelpers = require('../lib/swagger-helpers');
var chai = require('chai');
var expect = chai.expect;
var swaggerObject = require('./fixtures/swaggerObject.json');
var testData = require('./fixtures/testData');

describe('swagger-helpers submodule', function () {

  it('should have a method addDataToSwaggerObject()', function (done) {
    expect(swaggerHelpers).to.include.keys('addDataToSwaggerObject');
    expect(swaggerHelpers.addDataToSwaggerObject).to.be.function;
    done();
  });

  it('addDataToSwaggerObject() should require correct input', function (done) {
    expect(swaggerHelpers.addDataToSwaggerObject).to.throw(Error);
    done();
  });

  it('addDataToSwaggerObject() handles tags "tags" field', function(done) {
    swaggerHelpers.addDataToSwaggerObject(swaggerObject, testData.tags);
    done();
  });

  it('should have a method swaggerizeObj()', function (done) {
    expect(swaggerHelpers).to.include.keys('swaggerizeObj');
    expect(swaggerHelpers.swaggerizeObj).to.be.function;
    done();
  });

});
/* jshint ignore:end */