const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    rut:{
        type:Schema.ObjectId,
        references: { type : [Schema.Types.ObjectId], refPath: 'model_type'},
        model_type: {type: String, enum: ['apoderado', 'Educadora', 'asistente']}
    }
})


module.exports = mongoose.model('user', UserSchema)