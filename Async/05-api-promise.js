function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
setTimeout(() => {
  console.log('1s');
}, 1000);
*/

function timeout(delay) {
  return new Promise((resolve, reject) => {
    /*
    setTimeout(() => {
      resolve();
    }, delay);
    */
    setTimeout(resolve, delay);
  });
}

/*
timeout(1000)
  .then(() => timeout(1000))
  .then(() => {
    console.log('2s')
  });
  */

function ajax(value) {
  const rand = getRandomIntInclusive(0, 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({rand, value})
    }, rand);
  });
}

Promise.all([
  ajax('A'),
  ajax('B'),
  ajax('C'),
]).then(([resultA, resultB, resultC]) => {
  console.log(resultA.value, resultA.rand);
  console.log(resultB.value, resultB.rand);
  console.log(resultC.value, resultC.rand);
});
