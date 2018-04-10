const fs = require('fs');
const path = require('path');

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
  // Callback Hell / Pyramid of Doom
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err);
            }
            console.timeEnd('DONE');
          });
        });
      });
    });
  });
}

console.timeEnd('THREAD IDLE');
