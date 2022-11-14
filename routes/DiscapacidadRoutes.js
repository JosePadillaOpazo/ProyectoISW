const express = require('express')
const api = express.Router()
const DiscapacidadController = require('../controllers/DiscapacidadController')

api.post('/Discapacidad', DiscapacidadController.CrearDiscapacidad);
api.get('/Discapacidades', DiscapacidadController.VerDiscapacidad);
api.put('/Discapacidad/update/:id', DiscapacidadController.ModificarDiscapacidad);

module.exports = api;