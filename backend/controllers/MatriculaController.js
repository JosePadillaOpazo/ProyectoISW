<<<<<<< HEAD:backend/controllers/MatriculaController.js
const Matricula = require ('../models/Matricula');

const CrearMatricula = (req, res) =>{
    const {valor,abono,parvulo,apoderado,apoderado2,apoderado3} = req.body;
    const newMatricula = new Matricula (
        {
            valor,
            abono,
            parvulo,
            apoderado,
            apoderado2,
            apoderado3
        }
    );
    newMatricula.save(
        (err, Matricula) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar matricula"})
            }
            return res.status(200).send(Matricula)
        }
    )
}

const VerMatricula = (req, res) =>{
    Matricula.find({},
        (err, Matricula) => {
            if(err){
                return res.status(400).send({message:"Error al obtener matricula"})
            }
            return res.status(200).send(Matricula)
        }
    )
}


const ActualizarMatricula = (req, res) =>{
    const { id } = req.params;
    Matricula.findByIdAndUpdate(id, req.body, (err, Matricula) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener matricula"})
        }
        if(!Matricula){
            return res.status(404).send({message:"Error al encontrar matricula"})
        }
        return res.status(200).send(Matricula)
    }
   )
}

const EliminarMatricula = (req, res) =>{
    const { id } = req.params;
    Matricula.findByIdAndDelete(id, (err, Matricula) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener matricula"})
        }
        if(!Matricula){
            return res.status(404).send({message:"Error al encontrar matricula"})
        }
        return res.status(200).send(Matricula)
    }
   )
}
module.exports = {
    CrearMatricula,
    VerMatricula,
    ActualizarMatricula,
    EliminarMatricula
}

=======
const Matricula = require ('../models/Matricula');
const Parvulo = require("../models/Parvulo");
const apoderado = require("../models/apoderado");
const { CrearParvulo } = require('./ParvuloController');
const { CrearApoderado } = require('./ApoderadoController');

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
    return true;
  };

const CrearMatricula = (req, res) =>{
    const {valor,abono,parvulo, apoderado,apoderado2,apoderado3} = req.body;
    const newMatricula = new Matricula (
        {
            valor,
            abono,
            parvulo,
            apoderado,
            apoderado2,
            apoderado3
        }
    );



    newMatricula.save(
        (err, Matricula) => {

            if(err){
                return res.status(400).send({message:"Error al ingresar matricula"})
            }
            
            if(apoderado==apoderado2 || apoderado==apoderado3 || apoderado2==apoderado3){
                return res.status(400).send({message:"Error, los apoderados deben ser distintos"})
            }
            return res.status(200).send(Matricula)
            
        }
    )
}

const VerMatricula = (req, res) =>{
    Matricula.find({},
        (err, Matricula) => {
            if(err){
                return res.status(400).send({message:"Error al obtener matricula"})
            }
            return res.status(200).send(Matricula)
        }
    )
}


const ActualizarMatricula = (req, res) =>{
    const { id } = req.params;
    Matricula.findByIdAndUpdate(id, req.body, (err, Matricula) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener matricula"})
        }
        if(!Matricula){
            return res.status(404).send({message:"Error al encontrar matricula"})
        }
        return res.status(200).send(Matricula)
    }
   )
}

const EliminarMatricula = (req, res) =>{
    const { id } = req.params;
    Matricula.findByIdAndDelete(id, (err, Matricula) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener matricula"})
        }
        if(!Matricula){
            return res.status(404).send({message:"Error al encontrar matricula"})
        }
        return res.status(200).send(Matricula)
    }
   )
}
module.exports = {
    CrearMatricula,
    VerMatricula,
    ActualizarMatricula,
    EliminarMatricula
}

>>>>>>> 00f89b83d6d5edc91c7b0832165a249b2f5f7eaf:controllers/MatriculaController.js
