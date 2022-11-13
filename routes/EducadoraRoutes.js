const express = require ('express');
const api = express.Router();
const EducadoraController = require('../controllers/EducadoraController');

api.post('/Educadora', EducadoraController.CrearEducadora);
api.get('/Educadoras', EducadoraController.BuscarEducadora);

module.exports = api;