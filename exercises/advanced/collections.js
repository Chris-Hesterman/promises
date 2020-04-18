/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
var firstLine = require('../bare_minimum/promiseConstructor');
var fs = require('fs');
var Promise = require('bluebird');
var appendFileP = Promise.promisify(require('fs').appendFile);

var combineFirstLineOfManyFiles = function (filePaths, writePath) {
  return new Promise((resolve, reject) => {
    var pluckedFiles = filePaths.map((filePath) => {
      return firstLine.pluckFirstLineFromFileAsync(filePath);
    });
    Promise.all(pluckedFiles)
      .then((linesArray) => {
        console.log(linesArray);
        return linesArray.forEach((line, index, array) => {
          if (index < array.length - 1) {
            appendFileP(writePath, line + '\n');
          } else {
            appendFileP(writePath, line);
          }
        });
      })
      .then(() => {
        resolve(writePath);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles,
};
