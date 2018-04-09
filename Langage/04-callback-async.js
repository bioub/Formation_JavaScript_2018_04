setTimeout(() => {
  console.log('A');
}, 500);

setTimeout(() => {
  console.log('B');
}, 1000);

setTimeout(() => {
  console.log('C');
}, 500);

console.log('Fin')


// pile d'appels
// ^
// |
// |
// |
// |
// |                                            idle  log   log  idle   log
// |setTimeout - setTimeout - setTimeout - log ..⟳... cbA - cbC ..⟳... cbB
// +---------------------------------------------------0.5s-------------1s-> temps
// Sortie :                                Fin         A    C           B

// File d'attente :
