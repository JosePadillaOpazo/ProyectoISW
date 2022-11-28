const express = require('express')
const api = express.Router()
const AntecedenteController = require('../controllers/AntecedenteController')

api.post('/Antecedente', AntecedenteController.CrearAntecedente);
api.get('/Antecedentes', AntecedenteController.VerAntecedente);
api.put('/Antecedente/update/:id', AntecedenteController.ModificarAntecedente);

module.exports = api;