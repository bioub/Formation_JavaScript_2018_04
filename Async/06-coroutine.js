const co = require('co');

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

co(function *() {
  yield timeout(1000);
  yield timeout(1000);
  yield timeout(1000);
}).then(() => {
  console.log('3s');
});
