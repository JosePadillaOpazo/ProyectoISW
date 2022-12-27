const Asistencia = require('../models/asistencia')

const addAsistencia = (req, res) => {
    let newAsistencia = new Asistencia
    newAsistencia.titulo = req.body.titulo
    newAsistencia.comentario = req.body.comentario
    newAsistencia.asistente_d = req.body.idAsistente

    newAsistencia.save((err, asistencia) => {
        if(err){
            return res.status(400).send({message: "Error al registrar"});
        }
        return res.status(200).send(asistencia)
    })

}

const getAsistencia = (req, res) => {
    let asistenciaID = req.params.id;
    Asistencia.findById(asistenciaID)
    .populate('asistente_d')
    .exec((err, asistencia) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar el registro"})
        }
        return res.status(200).send(asistencia)
    })

}

const getAsistenciaSimple = (_req, res) => {
    Asistencia.find({}, (err, asistencia) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los registros"});
        }
        return res.status(200).send(asistencia)
    })
}

const getAsistencias = (_req, res) => {
    Asistencia.find()
    .populate('asistente_d')
    .exec((err, asistencia) => {
        res.status(200).send({asistencia})
    })
}

const delAsistencia = (req, res) => {
    let asistenciaID = req.params.id;
    Asistencia.findByIdAndDelete(asistenciaID, (err, asistencia) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el registro"});
        }
        return res.status(200).send({asistencia})
    })
}

const editAsistencia = (req, res) => {
    const { id } = req.params;
    Asistencia.findByIdAndUpdate(id, req.body, (err, asistencia) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({asistencia})
    })
}

module.exports = {
    addAsistencia,
    getAsistencias,
    delAsistencia,
    editAsistencia,
    getAsistenciaSimple,
    getAsistencia
}