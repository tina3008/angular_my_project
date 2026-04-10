const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const routes = require('./routes.json');

app.use(jsonServer.defaults());

app.use(jsonServer.rewriter(routes));

app.use(auth);

app.use(router);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
