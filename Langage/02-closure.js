function externe(msg) { // msg = 'Hello'
  // Portée de Closure (tous les arguments et variables d'externe sont
  // sauvegardés)
  // 2 conditions pour sa création
  // - une fonction déclarée dans une portée (fonction ou bloc)
  // - cette fonction soit appelée en dehors

  // msg: 1Mo
  // msg = null;
  function interne() {
    console.log(msg);
  }

  return interne;
}

/*
function doSomething(delay) {
  setTimeout(function() {

  }, delay);
}
*/

const helloFct = externe('Hello');

// ....

helloFct(); // Hello

// Dans 1s : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1s : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1s : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(function(iSaved) {

    return function() {
      console.log(iSaved);
    }
  }(i), 1000);
}
