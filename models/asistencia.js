const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AsistenciaSchema = new Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    titulo:{
        type: String,
        required: true
    },
    comentario:{
        type: String
    },
    asistente_d:{
        type: Schema.ObjectId,
        ref: 'asistente',
        required: true
    },
    parvulo:{
        type: Schema.ObjectId,
        ref: 'Parvulo',
        required: true
    }
})

module.exports = mongoose.model('asistencia', AsistenciaSchema)
