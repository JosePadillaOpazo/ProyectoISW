const Educadora = require ('../models/Educadora');

const CrearEducadora = (req, res) =>{
    const {rut,nombre,fecha_de_nac,direccion,telefono1,correo} = req.body;
    const newEducadora = new Educadora (
        {
            rut,
            nombre,
            fecha_de_nac,
            direccion,
            telefono1,
            correo
        }
    );
    newEducadora.save(
        (err, Educadora) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Educadora"})
            }
            return res.status(200).send(Educadora)
        }
    )
}

const BuscarEducadora = (req, res) =>{
    Educadora.find({},
        (err, Educadoras) => {
            if(err){
                return res.status(400).send({message:"Error al obtener educadora"})
            }
            return res.status(200).send(Educadoras)
        }
    )
}

const BuscarEducadoraEspecifica = (req, res) =>{
    const { id } = req.params;
    Educadora.findById(id, (err, Educadora) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener educadora"})
        }
        if(!Educadora){
            return res.status(404).send({message:"Error al encontrar educadora"})
        }
        return res.status(200).send(Educadora)
    }
   )
}

const UpdateEducadora = (req, res) =>{
    const { id } = req.params;
    Educadora.findByIdAndUpdate(id, req.body, (err, Educadora) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener educadora"})
        }
        if(!Educadora){
            return res.status(404).send({message:"Error al encontrar educadora"})
        }
        return res.status(200).send(Educadora)
    }
   )
}

const EliminarEducadora = (req, res) =>{
    const { id } = req.params;
    Educadora.findByIdAndDelete(id, (err, Educadora) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener educadora"})
        }
        if(!Educadora){
            return res.status(404).send({message:"Error al encontrar educadora"})
        }
        return res.status(200).send(Educadora)
    }
   )
}
module.exports = {
    CrearEducadora,
    BuscarEducadora,
    BuscarEducadoraEspecifica,
    UpdateEducadora,
    EliminarEducadora
}