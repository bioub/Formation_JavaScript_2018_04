const { Observable } = require('rxjs');

/*
function interval(delay) {
  return new Promise((resolve, reject) => {
    setInterval(resolve, delay);
  });
}

interval(1000)
  .then(() => {
    console.log('1s');
  });
*/

/*
function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}
*/

Observable.interval(1000)
  .filter((i) => i % 2 === 0)
  .map((i) => `${i+1}s`)
  .subscribe((val) => {
    console.log(val);
  });
