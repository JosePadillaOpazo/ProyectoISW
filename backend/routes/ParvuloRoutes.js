const express = require('express')
const api = express.Router()
const ParvuloController = require('../controllers/ParvuloController')

api.post('/parvulo',ParvuloController.CrearParvulo);
api.get('/parvulos',ParvuloController.VerParvulo);
api.get('/parvulo/search/:id',ParvuloController.BuscarParvuloEspecifico) ;
api.put('/parvulo/update/:id',ParvuloController.ActualizarParvulo);
api.delete('/parvulo/delete/:id',ParvuloController.EliminarParvulo);

module.exports = api;