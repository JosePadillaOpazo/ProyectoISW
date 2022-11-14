const Apoderado = require ('../models/apoderado');

const CrearApoderado = (req, res) =>{
    const {rut,nombre,fecha_de_nac,direccion,telefono1,telefono2,correo} = req.body;
    const newApoderado = new Apoderado (
        {
            rut,
            nombre,
            fecha_de_nac,
            direccion,
            telefono1,
            telefono2,
            correo
        }
    );
    newApoderado.save(
        (err, Apoderado) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Apoderado"})
            }
            return res.status(200).send(Apoderado)
        }
    )
}

const VerApoderado = (req, res) =>{
    Apoderado.find({},
        (err, Apoderados) => {
            if(err){
                return res.status(400).send({message:"Error al obtener apoderados"})
            }
            return res.status(200).send(Apoderados)
        }
    )
}


const ModificarApoderado = (req, res) =>{
    const { id } = req.params;
    Apoderado.findByIdAndUpdate(id, req.body, (err, Apoderado) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener apoderado"})
        }
        if(!Apoderado){
            return res.status(404).send({message:"Error al encontrar apoderado"})
        }
        return res.status(200).send(Apoderado)
    }
   )
}



module.exports = {
    CrearApoderado,
    VerApoderado,
    ModificarApoderado
}


