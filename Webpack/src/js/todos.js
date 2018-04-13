import axios from 'axios';
import config from '../config/config.json5';

const formElt = document.querySelector('.todo-form');
const listElt = document.querySelector('.todo-list');

/**
 * @param {HTMLElement} parent
 * @param {HTMLElement} elt
 */
function prepend(parent, elt) {
  if (parent.children.length) {
    parent.insertBefore(elt, parent.firstElementChild);
  } else {
    parent.appendChild(elt);
  }
}

function getTodosFromApi() {
  // baseUrl: http://localhost:3000/
  // url : /api/todos

  axios.defaults.baseURL = config.api.baseUrl;
  axios.defaults.headers.common['Authorization'] = '1234';

  axios
    .get('/api/todos')
    .then(res => {
      res.data.forEach(({ value }) => {
        insertTodo(value);
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getTodosFromApi();

formElt.addEventListener('submit', event => {
  event.preventDefault();

  const value = event.target.todo.value;

  insertTodo(value);
});

function insertTodo(value) {
  const divElt = document.createElement('div');

  const inputElt = document.createElement('input');
  inputElt.value = value;

  divElt.appendChild(inputElt);

  prepend(listElt, divElt);
}
