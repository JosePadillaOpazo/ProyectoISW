const express = require('express')
const api = express.Router()
const ApoderadoController = require('../controllers/ApoderadoController')

api.post('/Apoderado', ApoderadoController.CrearApoderado);
api.get('/Apoderados', ApoderadoController.VerApoderado);
api.put('/Apoderado/update/:id', ApoderadoController.ModificarApoderado);

module.exports = api;