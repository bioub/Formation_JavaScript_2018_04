const fs = require('fs');
const util = require('util');
const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

// Node 8
const appendFile = util.promisify(fs.appendFile);
const mkdir = util.promisify(fs.mkdir);
const stat = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        return reject(err);
      }
      resolve(stats);
    });
  });
}

function log(logFile, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  return appendFile(logFile, msg);
}

console.time('DONE');
console.time('THREAD IDLE');

stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => console.timeEnd('DONE'))
  .catch((err) => {
    console.log(err);
  });

console.timeEnd('THREAD IDLE');
