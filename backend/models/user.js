const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    rut:{
        type: Schema.ObjectId,
        ref: 'asistente'
    }
    
})


module.exports = mongoose.model('user', UserSchema)
