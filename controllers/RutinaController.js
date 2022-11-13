const Rutina = require ('../models/Rutina');

const CrearRutina = (req, res) =>{
    const {actividad} = req.body;
    const newRutina = new Rutina (
        {
            actividad
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
    Rutina.find({},
        (err, Rutina) => {
            if(err){
                return res.status(400).send({message:"Error al encontrar Rutina"})
            }
            return res.status(200).send(Rutina)
        }
    )
}

module.exports = {
    CrearRutina,
    BuscarRutina
}