const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EnfermedadSchema = new Schema(
    {
        nombre:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Enfermedad', EnfermedadSchema);