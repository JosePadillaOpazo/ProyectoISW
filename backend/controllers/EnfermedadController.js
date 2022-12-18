const Enfermedad = require ('../models/enfermedad');

const CrearEnfermedad = (req, res) =>{
    const {nombre} = req.body;
    const newEnfermedad = new Enfermedad (
        {
            nombre
        }
    );
    newEnfermedad.save(
        (err, Enfermedad) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Enfermedad"})
            }
            return res.status(200).send(Enfermedad)
        }
    )
}

const VerEnfermedad = (req, res) =>{
    Enfermedad.find({},
        (err, Enfermedades) => {
            if(err){
                return res.status(400).send({message:"Error al obtener Enfermedads"})
            }
            return res.status(200).send(Enfermedades)
        }
    )
}


const ModificarEnfermedad = (req, res) =>{
    const { id } = req.params;
    Enfermedad.findByIdAndUpdate(id, req.body, (err, Enfermedad) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener Enfermedad"})
        }
        if(!Enfermedad){
            return res.status(404).send({message:"Error al encontrar Enfermedad"})
        }
        return res.status(200).send(Enfermedad)
    }
   )
}



module.exports = {
    CrearEnfermedad,
    VerEnfermedad,
    ModificarEnfermedad
}


