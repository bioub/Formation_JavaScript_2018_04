const fs = require('fs');
const path = require('path');
const async = require('async');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(logFile, msg, cb) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(logFile, msg, cb);
}

console.time('DONE');
console.time('THREAD IDLE');

fs.stat(logDir, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(logDir, (err) => {
      if (err) {
        return console.log(err);
      }
      next();
    });
  }

  if (err) {
    return console.log(err);
  }

  next();
})

function next() {
  async.series([
    (next) => log(logFile, 'Ligne 1', next),
    (next) => log(logFile, 'Ligne 2', next),
    (next) => log(logFile, 'Ligne 3', next),
    (next) => log(logFile, 'Ligne 4', next),
    (next) => log(logFile, 'Ligne 5', next),
  ], (err) => {
    if (err) {
      return console.log(err);
    }
    console.timeEnd('DONE');
  });
}

console.timeEnd('THREAD IDLE');
