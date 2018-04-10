const fs = require('fs');
const util = require('util');
const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

// Node 8
const appendFile = util.promisify(fs.appendFile);
const mkdir = util.promisify(fs.mkdir);
const stat = util.promisify(fs.stat);

function log(logFile, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  return appendFile(logFile, msg);
}

console.time('DONE');
console.time('THREAD IDLE');
async function logAll () {
  try {
    const stats = await stat(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      await mkdir(logDir);
    } else {
      throw err;
    }
  }

  await log(logFile, 'Ligne 1');
  await log(logFile, 'Ligne 2');
  await log(logFile, 'Ligne 3');
  await log(logFile, 'Ligne 4');
  await log(logFile, 'Ligne 5');
  console.timeEnd('DONE');
};

logAll().catch((err) => console.log(err));

console.timeEnd('THREAD IDLE');
