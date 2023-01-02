const Rutina = require ('../models/Rutina');

const CrearRutina = (req, res) =>{
    const {fecha,grado,educadora,actividad,evaluacion} = req.body;
    const newRutina = new Rutina (
        {
            fecha,
            grado,
            educadora,
            actividad,
            evaluacion
        }
    );
    newRutina.save(
        (err, Rutina) => {
            if(err){
                return res.status(400).send({message:"Error al ingresar Rutina"})
            }
            return res.status(200).send(Rutina)
        }
    )
}

const BuscarRutina = (req, res) =>{
    Rutina.find().populate({path :'grado educadora'}).exec((err, Rutina) => {
            if(err){
                return res.status(400).send({message:"Error al encontrar Rutina"})
            }
            return res.status(200).send(Rutina)
        }
    )
}

const BuscarRutinaEspecifica = (req, res) =>{
    const { id } = req.params;
    Rutina.findById(id).populate({path :'grado educadora'}).exec((err, Rutina) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener rutina"})
        }
        if(!Rutina){
            return res.status(404).send({message:"Error al encontrar rutina"})
        }
        return res.status(200).send(Rutina)
    }
   )
}

const UpdateRutina = (req, res) =>{
    const { id } = req.params;
    Rutina.findByIdAndUpdate(id, req.body).populate({path :'grado educadora'}).exec((err, Rutina) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener rutina"})
        }
        if(!Rutina){
            return res.status(404).send({message:"Error al encontrar rutina"})
        }
        return res.status(200).send(Rutina)
    }
   )
}

const EliminarRutina = (req, res) =>{
    const { id } = req.params;
    Rutina.findByIdAndDelete(id, (err, Rutina) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener rutina"})
        }
        if(!Rutina){
            return res.status(404).send({message:"Error al encontrar rutina"})
        }
        return res.status(200).send(Rutina)
    }
   )
}
module.exports = {
    CrearRutina,
    BuscarRutina,
    BuscarRutinaEspecifica,
    UpdateRutina,
    EliminarRutina
}