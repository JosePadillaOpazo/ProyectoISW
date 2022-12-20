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

