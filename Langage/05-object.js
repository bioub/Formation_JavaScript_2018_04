// on manipule des objets existants

// du langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// du navigateur (Web APIs)
console.log(typeof document); // object
console.log(typeof window); // object
console.log(typeof navigateur); // object

// de Node.js
console.log(typeof process); // object
console.log(typeof global); // object

// du navigateur et Node.js
console.log(typeof console); // object

// les objets JS sont en réalité des dictionnaires
// ils sont extensibles, on peut ajouter, modifier ou supprimer des clés/valeurs

console.log(Math.sum); // undefined

// ajouter
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// modifier
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// supprimer
delete Math.sum;
console.log(Math.sum); // undefined

// automatiser un test qui dépend de Math.random
const assert = require('assert');

const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';

const randomBackup = Math.random;
Math.random = () => 0.75;
assert.strictEqual(pileOuFace(), 'pile');

Math.random = () => 0.25;
assert.strictEqual(pileOuFace(), 'face');
Math.random = randomBackup;

// sauf dans les tests et dans quelques particuliers
// mauvaise d'étendre les objets standards

// Création de nos objets

// 1 - object literal (assez proche de JSON)
// - mono-instance
// - très simples à créer (coords x, y)

const coords = {
  x: 10,
  y: 20,
};

console.log(coords.x); // 10

// syntaxe plus dynamique pour accéder au contenu []
var key = 'x';
console['log'](coords[key]); // 10

// on peut sur les clés
for (var key in coords) {
  console.log('key', key);
  console.log('value', coords[key]);
}

// 2 - factory function
// - objets multi-instanciés
// - assez sofistiqués
// - pas de méthodes
function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getInfos: function() {
      return 'x : ' + this.x;
    }
  };
}

const coords3dA = coords3dFactory();
console.log(coords3dA.getInfos());

const coords3dB = coords3dFactory(10, 20);
console.log(coords3dB.getInfos());

console.log(coords3dA.getInfos === coords3dB.getInfos); // false (ça devrait être true)

// 3 - constructor function
// - objets multi-instanciés
// - assez sofistiqués
// - avec des méthodes
// - avec un type

function Contact(prenom) {
  this._prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain);
console.log(romain._prenom); // si _key => propriété privé
console.log(romain.hello());

const eric = new Contact('Eric');

console.log(romain instanceof Contact); // true
console.log(romain instanceof String); // false

console.log(romain.hello === eric.hello); // true
