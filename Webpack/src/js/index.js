import { Horloge } from './horloge';

const divElts = document.body.querySelectorAll('.horloge');

const divEltsArray = Array.from(divElts);

for (const divElt of divEltsArray) {
  const clock = new Horloge(divElt);
  clock.start();
}
