var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

var awesome = require('./awesome');

describe("Awesome.js promise based unit tests", function () {
  it("Should return true from doSomethingAsync1", function () {
    return expect(awesome.doSomethingAsync1()).to.eventually.deep.equal({result:true});
  });
  
  it("Should return correct string from doSomethingAsync2 when input true", function () {
    return expect(awesome.doSomethingAsync2(true)).to.eventually.deep.equal({response:"This is awesomely true"});
  });
  
  it("Should return correct string from doSomethingAsync2 when input false", function () {
    return expect(awesome.doSomethingAsync2(false)).to.eventually.deep.equal({response:"This is unfortanetly false"});
  });
});

describe("Awesome.js promise based integration tests", function () {
  it("should return the correct string when running full job", function () {
    return expect(awesome.runJob()).to.eventually.deep.equal({response:"This is awesomely true"});
  });
});
