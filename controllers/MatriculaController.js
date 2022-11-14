const Matricula = require ('../models/Matricula');

const CrearMatricula = (req, res) =>{
    const {fecha,valor,abono,parvulo} = req.body;
    const newMatricula = new Matricula (
        {
            fecha,
            valor,
            abono,
            parvulo
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
        return res.status(200).send(Parvulo)
    }
   )
}

const EliminarMatricula = (req, res) =>{
    const { id } = req.params;
    Matricula.findByIdAndDelete(id, (err, Matricula) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener matricula"})
        }
        if(!Parvulo){
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

