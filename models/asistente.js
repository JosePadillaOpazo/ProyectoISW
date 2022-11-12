const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AsistenteSchema = new Schema({
    rut:{
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true
    },
    fecha_de_nac:{
        type: Date,
        required: true
    },
    direcion:{
        type: Number,
        required: true
    },
    telefono:{
        type: String
    },
    correo:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('asistente', AsistenteSchema)