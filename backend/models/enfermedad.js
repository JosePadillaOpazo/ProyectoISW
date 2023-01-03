const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EnfermedadSchema = new Schema(
    {
        nombre:{
            type: String,
            required: true,
            match: /^(([A-Za-z0-9 ]+)+)$/
        }
    }
);

module.exports = mongoose.model('Enfermedad', EnfermedadSchema);