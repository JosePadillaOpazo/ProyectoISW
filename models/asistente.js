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
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('asistente', AsistenteSchema)