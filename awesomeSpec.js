var chai = require('chai');
var expect = chai.expect;

var awesome = require('./awesome');

describe("Awesome.js unit tests", function () {
  it("Should return true from doSomethingAsync1", function (done) {
    awesome.doSomethingAsync1()
      .then(function (response) {
        expect(response).to.deep.equal({result:true});
        done();
      })
      .catch(done);
  });
  
  it("Should return correct string from doSomethingAsync2 when input true", function (done) {
    awesome.doSomethingAsync2(true)
      .then(function (result) {
        expect(result.response).to.equal("This is awesomely true");
        done();
      })
      .catch(done);
  });
  
  it("Should return correct string from doSomethingAsync2 when input false", function (done) {
    awesome.doSomethingAsync2(false)
      .then(function (result) {
        expect(result.response).to.equal("This is unfortanetly false");
        done();
      })
      .catch(done);
  });
});

describe("Awesome.js integration tests", function () {
  it("should return the correct string when running full job", function (done) {
    awesome.runJob()
      .then(function (result) {
        expect(result.response).to.equal("This is awesomely true");
        done();
      })
      .catch(done);
  });
});
