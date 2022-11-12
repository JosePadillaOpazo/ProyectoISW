const express = require('express')
const api = express.Router()
const multer = require('multer')
const upload = multer().single('avatar')
const uploadFile = require('../middleware/multer')
const asistenteController = require('../controllers/asistenteController')

api.post('/asistente', asistenteController.addAsistente);
api.get('/asistentes', asistenteController.getAsistentes);
api.get('/asistente/find/:id', asistenteController.getAsistente)
api.delete('/asistente/delete/:id', asistenteController.delAsistente)
api.put('/asistente/edit/:id',  asistenteController.modAsistente)
module.exports = api