const Antecedente = require ('../models/antecedente');

const CrearAntecedente = (req, res) =>{
    const {parvulo,discapacidad,enfermedad,cuidado} = req.body;
    const newAntecedente = new Antecedente (
        {
        parvulo,
        discapacidad,
        enfermedad,
        cuidado
        }
    );
    newAntecedente.save(
        (err, Antecedente) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Antecedente"})
            }
            return res.status(200).send(Antecedente)
        }
    )
}

const VerAntecedente = (req, res) =>{
    Antecedente.find().populate({path :'parvulo discapacidad enfermedad'}).exec((err, Antecedentes) => {
            if(err){
                return res.status(400).send({message:"Error al obtener Antecedente"})
            }
            return res.status(200).send(Antecedentes)
        }
    )
}


const ModificarAntecedente = (req, res) =>{
    const { id } = req.params;
    Antecedente.findByIdAndUpdate(id, req.body, (err, Antecedente) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener Antecedente"})
        }
        if(!Antecedente){
            return res.status(404).send({message:"Error al encontrar Antecedente"})
        }
        return res.status(200).send(Antecedente)
    }
   )
}

const EliminarAntecedente = (req, res) =>{
    const { id } = req.params;
    Antecedente.findByIdAndDelete(id, (err, Antecedente) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener antecedente"})
        }
        if(!Antecedente){
            return res.status(404).send({message:"Error al encontrar antecedente"})
        }
        return res.status(200).send(Antecedente)
    }
   )
}


module.exports = {
    CrearAntecedente,
    VerAntecedente,
    ModificarAntecedente,
    EliminarAntecedente
}


