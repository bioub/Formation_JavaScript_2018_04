const nbs = [2, 3, 4];

// Callback sync Array (forEach, filter, map, reduce...) ES5, IE9+
nbs.filter((nb) => nb % 2 === 0)
   .map((nb) => nb ** 2)
   .forEach(function(nb, i) {
     console.log(nb, i);
   });

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log('sum', sum);

// ES6 : find, findIndex, Edge (pas IE)

function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while (debut + delay > Date.now());

  cb();
}

setTimeoutSync(() => console.log('A 1s'), 1000);
setTimeoutSync(() => console.log('B 1s'), 1000);

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |                   log log                    log      log
// |=> => =>   => =>   => =>     => => =>         =>       =>
// |filter   - map   - forEach - reduce   - log - stSync - stSync - log('Fin')
// +----------------------------------------------------------------> temps
// Sortie :            4   16               9     1s       1S       Fin
