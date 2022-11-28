const express = require('express')
const api = express.Router()
const APC = require('../controllers/asistenciaParvuloController')

api.post('/asistenciaParvulo', APC.addAsistenciaParvulo);
api.get('/asistenciasParvulos', APC.getAsistenciaParvulo);
api.get('/asistenciaParvulo/find/:id', APC.findAsistenciaParvulo);
api.delete('/asistenciaParvulo/delete/:id', APC.delAsistenciaParvulo)
api.put('/asistenciaParvulo/edit/:id', APC.editAsistenciaParvulo)

module.exports = api
