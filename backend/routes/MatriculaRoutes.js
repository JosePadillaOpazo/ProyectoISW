const express = require("express");
const api = express.Router();
const MatriculaController = require('../controllers/MatriculaController');

api.post("/matricula",MatriculaController.CrearMatricula);
api.get('/matriculas',MatriculaController.VerMatricula);
api.get('/matricula/search/:id',MatriculaController.buscarMatriculaEspecifica);
api.put('/matricula/update/:id',MatriculaController.ActualizarMatricula);
api.delete('/matricula/delete/:id',MatriculaController.EliminarMatricula);

module.exports = api;