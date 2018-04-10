function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

(async function () {
  await timeout(1000);
  await timeout(1000);
  await timeout(1000);
  console.log('3s');
})();
