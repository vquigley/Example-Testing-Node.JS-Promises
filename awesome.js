var Promise = require('promise');

module.exports.doSomethingAsync1 = doSomethingAsync1;
module.exports.doSomethingAsync2 = doSomethingAsync2;
module.exports.runJob = runJob;

function doSomethingAsync1() {
 return new Promise(function (fullfil, reject) {
   setTimeout(function () {
    fullfil({result:true});
   }, 500);
 });
};


function doSomethingAsync2(doSomethingAsync1Result) {
  return new Promise(function (fullfil, reject) {
   setTimeout(function () {
     if (doSomethingAsync1Result)
      fullfil({response:"This is awesomely true"});
     else
      fullfil({response:"This is unfortanetly false"}); 
   }, 800);
 });
};

function runJob() {
  return doSomethingAsync1()
    .then(doSomethingAsync2);
};

