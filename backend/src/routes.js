const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

//Lista as ongs cadastradas
routes.get('/ongs', OngController.index)
//Cadastra ongs
routes.post('/ongs', OngController.create);

module.exports = routes;