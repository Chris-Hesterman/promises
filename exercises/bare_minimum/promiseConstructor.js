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
  return new Promise((resolve, reject) => {
    callbackReview.pluckFirstLineFromFile(filePath, (err, firstLine) => {
      if (err) {
        reject(err);
      } else {
        resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  return new Promise((resolve, reject) => {
    callbackReview.getStatusCode(url, (err, statusCode) => {
      if (err) {
        reject(err);
      } else {
        resolve(statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync,
};
