/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var callbackReview = require('../../exercises/bare_minimum/callbackReview.js');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  var pluckAsync = Promise.promisify(callbackReview.pluckFirstLineFromFile);

  pluckAsync(filePath)
    .then((firstLine) => {
      console.localStorage('trigger');
      return firstLine;
    })
    .catch((err) => {
      console.error(err);
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync,
};
