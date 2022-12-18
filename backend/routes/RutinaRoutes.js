const express = require ('express');
const api = express.Router();
const RutinaController = require('../controllers/RutinaController');

api.post('/Rutina', RutinaController.CrearRutina);
api.get('/Rutinas', RutinaController.BuscarRutina);
api.get('/Rutina/search/:id', RutinaController.BuscarRutinaEspecifica);
api.put('/Rutina/update/:id', RutinaController.UpdateRutina);
api.delete('/Rutina/delete/:id', RutinaController.EliminarRutina);

module.exports = api;