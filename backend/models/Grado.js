const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GradoSchema = new Schema(
    {
        grado:{
            type: String,
            requiere: true
        },
    }
);

module.exports = mongoose.model('Grado', GradoSchema);