const express = require ('express');
const api = express.Router();
const GradoController = require('../controllers/GradoController');

api.post('/Grado', GradoController.CrearGrado);
api.get('/Grados', GradoController.BuscarGrado);
api.put('/Grado/update/:id', GradoController.UpdateGrado);
api.delete('/Grado/delete/:id', GradoController.EliminarGrado);

module.exports = api;