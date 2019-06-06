const api = require('express').Router();

const vistaDocument = require('../controller/documentController');

api.get('/', vistaDocument.list);
api.get('/registrar', vistaDocument.registrar);
api.post('/add', vistaDocument.save);

module.exports = api;