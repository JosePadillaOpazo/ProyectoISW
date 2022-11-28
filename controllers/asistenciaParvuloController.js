const AsistenciaParvulo = require('../models/asistenciaParvulo')

const addAsistenciaParvulo = (req, res) => {
    let newAsistenciaParvulo = new AsistenciaParvulo
    newAsistenciaParvulo.asistencia = req.body.idAsistencia
    newAsistenciaParvulo.parvulo_r = req.body.idParvulo

    newAsistenciaParvulo.save((err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al registrar"})
        }
        return res.status(200).send(asistenciaParvulo)
    })
}


const delAsistenciaParvulo = (req, res) => {
    let id = req.params.id
    AsistenciaParvulo.findOneAndDelete(id, (err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al eliminar el registro"})
        }
        return res.status(200).send({asistenciaParvulo})
    })
}

const getAsistenciaParvulo = (req, res) => {
    AsistenciaParvulo.find()
    .populate('asistencia')
    .populate('parvulo_d')
    .exec((_err, asistenciaParvulo) => {
        res.status(200).send({asistenciaParvulo})
    })
}

const editAsistenciaParvulo = (req, res) => {
    const { id } = req.params;
    AsistenciaParvulo.findByIdAndUpdate(id, req.body, (err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al editar el perfil"})
        }
        return res.status(200).send({asistenciaParvulo})
    })
}

const findAsistenciaParvulo = (req, res) => {
    let idAsistencia = req.params.id
    AsistenciaParvulo.findById(idAsistencia, (err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar el perfil"})
        }
        return res.status(200).send(asistenciaParvulo)
    })
}

module.exports = {
    addAsistenciaParvulo,
    getAsistenciaParvulo,
    delAsistenciaParvulo,
    editAsistenciaParvulo,
    findAsistenciaParvulo
}