const api = require('express').Router();

const vistaDocument = require('../controller/documentController');

api.get('/', vistaDocument.list);
api.get('/registrar', vistaDocument.registrar);
api.post('/add', vistaDocument.save);
api.post('/newnota', vistaDocument.newNota );
api.get('/Nota', vistaDocument.ver);
api.get('/porcentaje', vistaDocument.listPor);
api.get('/promedio', vistaDocument.listPro);
module.exports = api;