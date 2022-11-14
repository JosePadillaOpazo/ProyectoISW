const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DiscapacidadSchema = new Schema(
    {
        nombre:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Discapacidad', DiscapacidadSchema);