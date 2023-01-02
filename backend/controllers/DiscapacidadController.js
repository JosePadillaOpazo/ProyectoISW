const Discapacidad = require ('../models/discapacidad');

const CrearDiscapacidad = (req, res) =>{
    const {nombre} = req.body;
    const newDiscapacidad = new Discapacidad (
        {
            nombre
        }
    );
    newDiscapacidad.save(
        (err, Discapacidad) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Discapacidad"})
            }
            return res.status(200).send(Discapacidad)
        }
    )
}

const VerDiscapacidad = (req, res) =>{
    Discapacidad.find({},
        (err, Discapacidades) => {
            if(err){
                return res.status(400).send({message:"Error al obtener Discapacidad"})
            }
            return res.status(200).send(Discapacidades)
        }
    )
}


const ModificarDiscapacidad = (req, res) =>{
    const { id } = req.params;
    Discapacidad.findByIdAndUpdate(id, req.body, (err, Discapacidad) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener Discapacidad"})
        }
        if(!Discapacidad){
            return res.status(404).send({message:"Error al encontrar Discapacidad"})
        }
        return res.status(200).send(Discapacidad)
    }
   )
}



module.exports = {
    CrearDiscapacidad,
    VerDiscapacidad,
    ModificarDiscapacidad
}


