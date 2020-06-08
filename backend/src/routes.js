const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

//Lista as ongs cadastradas
routes.get('/ongs', OngController.index)
//Cadastra ongs
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);

module.exports = routes;