const express = require('express')
const api = express.Router()
const asistenciaController = require('../controllers/asistenciaController')

api.post('/asistencia', asistenciaController.addAsistencia);
api.get('/get', asistenciaController.getAsistenciaSimple);
api.get('/asistencias', asistenciaController.getAsistencias);
api.delete('/asistencia/delete/:id', asistenciaController.delAsistencia);
api.put('/asistencia/edit/:id', asistenciaController.editAsistencia);
api.get('/asistencia/find/:id', asistenciaController.getAsistencia);
module.exports = api