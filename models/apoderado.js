const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema(
    {
        rut:{
            type: String,
            required: true
            
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
        telefono1:{
            type: Number,
            required: true,
            
        },
        telefono2:{
            type: Number,
            required: true,
            
        },
        correo:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Apoderado', ApoderadoSchema);