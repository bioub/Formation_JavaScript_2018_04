const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Cross Origin Resource Sharing
// Req : Origin: localhost:8080
// Res : Allow-Access-Control-Origin: *

app.use((req, res, next) => {
  console.log('Authorization', req.headers.authorization);

  if (req.headers.authorization === '1234') {
    return next();
  }

  res.statusCode = 403;
  res.json({
    msg: 'Unauthorized',
  });
});

const todos = [{
  id: 1,
  value: 'Acheter du pain',
  done: false,
}, {
  id: 2,
  value: 'Apprendre à utiliser Axios',
  done: false,
}, {
  id: 3,
  value: 'Manipuler le DOM',
  done: true,
}];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
