const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    rut:{
        type: [Schema.Types.ObjectId],
        refPath: 'model_type'
    },
    model_type:{
        type: String,
        enum: ['Educadora', 'Apoderado', 'asistente']
    }
})


module.exports = mongoose.model('user', UserSchema)