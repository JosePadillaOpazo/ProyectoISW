const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    rut:{
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{7,8}[-|‐]{1}[0-9kK]{1}$/
    },
    rol:{
        type: String,
        enum: ["Educadora", "Asistente", "Apoderado"]
    }
    
})


module.exports = mongoose.model('user', UserSchema)
