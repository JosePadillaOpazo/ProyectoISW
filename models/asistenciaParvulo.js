const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AsistenciaSchema = new Schema({
    fecha:{
        type: Date,
        default: Date.now
    },
    parvulo:{
        type: Schema.ObjectId,
        ref: 'Parvulo',
        required: true
    },
    asistencia:{
        type: Schema.ObjectId,
        ref: 'asistencia',
        required: true
    }
})

module.exports = mongoose.model('asistenciaParvulo', AsistenciaSchema);