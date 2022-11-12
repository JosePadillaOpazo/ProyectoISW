const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RutinaSchema = new Schema(
    {
        fecha:{
            type: Date,
            default: Date.now()
        },
        actividades:{
            type: String,
            required: true
        }

    }
);

module.exports = mongoose.model('Rutina', RutinaSchema);