const express = require('express')
const api = express.Router()
const EnfermedadController = require('../controllers/EnfermedadController')

api.post('/Enfermedad', EnfermedadController.CrearEnfermedad);
api.get('/Enfermedades', EnfermedadController.VerEnfermedad);
api.put('/Enfermedad/update/:id', EnfermedadController.ModificarEnfermedad);
api.delete('/Enfermedad/delete/:id', EnfermedadController.EliminarEnfermedad);

module.exports = api;