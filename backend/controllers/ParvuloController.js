const Parvulo = require ('../models/Parvulo');

const CrearParvulo = (req, res) =>{
    const {rut,nombre,fecha_de_nac,grado} = req.body;
    const newParvulo = new Parvulo (
        {
            rut,
            nombre,
            fecha_de_nac,
            grado
        }
    );
    newParvulo.save(
        (err, Parvulo) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar parvulo"})
            }
            return res.status(200).send(Parvulo)
        }
    )
}

const VerParvulo = (req, res) =>{
    Parvulo.find({},
        (err, Parvulo) => {
            if(err){
                return res.status(400).send({message:"Error al obtener el parvulo"})
            }
            return res.status(200).send(Parvulo)
        }
    )
}


const ActualizarParvulo = (req, res) =>{
    const { id } = req.params;
    Parvulo.findByIdAndUpdate(id, req.body, (err, Parvulo) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener parvulo"})
        }
        if(!Parvulo){
            return res.status(404).send({message:"Error al encontrar parvulo"})
        }
        return res.status(200).send(Parvulo)
    }
   )
}

const EliminarParvulo = (req, res) =>{
    const { id } = req.params;
    Parvulo.findByIdAndDelete(id, (err, Parvulo) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener parvulo"})
        }
        if(!Parvulo){
            return res.status(404).send({message:"Error al encontrar parvulo"})
        }
        return res.status(200).send(Parvulo)
    }
   )
}
module.exports = {
    CrearParvulo,
    VerParvulo,
    ActualizarParvulo,
    EliminarParvulo
}