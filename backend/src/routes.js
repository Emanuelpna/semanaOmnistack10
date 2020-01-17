const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

/**
 * Query Params: req.query -> Query String usada por exemplo no GET. "/users?search=Emanuel"
 * Route Params: req.params -> Quando existe uma variável na rota. "/users/:id"
 * Body: req.body -> Payload enviado para o servidor
 */

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

module.exports = routes;
