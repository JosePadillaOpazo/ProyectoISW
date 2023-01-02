const express = require ('express');
const api = express.Router();
const EducadoraController = require('../controllers/EducadoraController');

api.post('/Educadora', EducadoraController.CrearEducadora);
api.get('/Educadoras', EducadoraController.BuscarEducadora);
api.get('/Educadora/search/:id', EducadoraController.BuscarEducadoraEspecifica);
api.put('/Educadora/update/:id', EducadoraController.UpdateEducadora);
api.delete('/Educadora/delete/:id', EducadoraController.EliminarEducadora);

module.exports = api;