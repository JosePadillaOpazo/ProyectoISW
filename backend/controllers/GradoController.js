const Grado = require ('../models/Grado');

const CrearGrado = (req, res) =>{
    const {grado} = req.body;
    const newGrado = new Grado (
        {
            grado
        }
    );
    newGrado.save(
        (err, Grado) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Grado"})
            }
            return res.status(200).send(Grado)
        }
    )
}

const BuscarGrado = (req, res) =>{
    Grado.find({},
        (err, Grado) => {
            if(err){
                return res.status(400).send({message:"Error al encontrar Grado"})
            }
            return res.status(200).send(Grado)
        }
    )
}

const UpdateGrado = (req, res) =>{
    const { id } = req.params;
    Grado.findByIdAndUpdate(id, req.body, (err, Grado) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener Grado"})
        }
        if(!Grado){
            return res.status(404).send({message:"Error al encontrar Grado"})
        }
        return res.status(200).send(Grado)
    }
   )
}

const EliminarGrado = (req, res) =>{
    const { id } = req.params;
    Grado.findByIdAndDelete(id, (err, Grado) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener grado"})
        }
        if(!Grado){
            return res.status(404).send({message:"Error al encontrar grado"})
        }
        return res.status(200).send(Grado)
    }
   )
}

module.exports = {
    CrearGrado,
    BuscarGrado,
    UpdateGrado,
    EliminarGrado
}