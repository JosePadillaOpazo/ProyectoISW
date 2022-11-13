const express = require ('express');
const api = express.Router();
const RutinaController = require('../controllers/RutinaController');

api.post('/Rutina', RutinaController.CrearRutina);
api.get('/Rutinas', RutinaController.BuscarRutina);

module.exports = api;