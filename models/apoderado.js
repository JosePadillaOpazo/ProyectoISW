const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema(
    {
        rut:{
            type: String,
            required: true,
            unique: true,
            match: /^[0-9]+.[0-9]+.[0-9]+-[0-9k]$/
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
            required: true,
            match: /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/
        }
    }
);

module.exports = mongoose.model('Apoderado', ApoderadoSchema);