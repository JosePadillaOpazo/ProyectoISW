const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AsistenteSchema = new Schema({
    rut:{
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{7,8}[-|‐]{1}[0-9kK]{1}$/
    },
    nombre:{
        type: String,
        required: true,
        match: /^([a-zA-Z]+( [a-zA-Z]+)+)$/
    },
    fecha_de_nac:{
        type: Date,
        required: true
    },
    direccion:{
        type: String,
        required: true,
        match:/^([A-Za-z0-9,]+( [A-Za-z0-9,]+)+)$/
    },
    telefono:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true,
        match: /^[a-zA-Z._-]+@[a-zA-Z]+.[a-zA-Z]+$/
    }
})

module.exports = mongoose.model('asistente', AsistenteSchema)