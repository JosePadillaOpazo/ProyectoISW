const asistenciaParvulo = require('../models/asistenciaParvulo')
const AsistenciaParvulo = require('../models/asistenciaParvulo')

const addAsistenciaParvulo = (req, res) => {
    let newAsistenciaParvulo = new AsistenciaParvulo
    newAsistenciaParvulo.parvulo = req.body.idParvulo
    newAsistenciaParvulo.asistencia = req.body.idAsistencia

    newAsistenciaParvulo.save((err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al registrar"})
        }
        return res.status(200).send(asistenciaParvulo)
    })
}


const getAsistenciaParvulo = (_req, res) => {
    AsistenciaParvulo.find({}, (err, asistenciaParvulo) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los registros"})
        }
        return res.status(200).send(asistenciaParvulo)
    })
}

const delAsistenciaParvulo = (_req, res) => {
    AsistenciaParvulo.find()
    .populate('parvulo')
    .populate('asistencia')
    .exec((err, asistenciaParvulo) => {
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

module.exports = {
    addAsistenciaParvulo,
    getAsistenciaParvulo,
    delAsistenciaParvulo,
    editAsistenciaParvulo
}