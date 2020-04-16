/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

// 1. promise constructor pluck first line (already async)
// 2. promisification getGitHubProfile

var fs = require('fs');
var Promise = require('bluebird');
var promisification = require('./promisification.js');
var promiseConstructor = require('./promiseConstructor.js');

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  return promiseConstructor
    .pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      return promisification.getGitHubProfileAsync(username);
    })
    .then((profile) => {
      return fs.writeFileSync(writeFilePath, JSON.stringify(profile), (err) => {
        if (err) {
          throw err;
        } else {
          console.log('Success!');
        }
      });
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile,
};
