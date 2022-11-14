const express = require("express");
const api = express.Router();
const MatriculaController = require('../controllers/MatriculaController');

api.post("matricula",MatriculaController.CrearMatricula);
api.get('/matricula/search/:id',MatriculaController.VerMatricula);
api.put('/matricula/update/:id',MatriculaController.ActualizarMatricula);
api.delete('/matricula/delete/:id',MatriculaController.EliminarMatricula);

module.exports = api;