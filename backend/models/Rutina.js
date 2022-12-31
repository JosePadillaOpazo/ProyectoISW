const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RutinaSchema = new Schema(
    {
        fecha:{
            type: Date
        },
        grado:{
            type: Schema.ObjectId,
            ref: 'Grado'
        },
        educadora:{
            type: Schema.ObjectId,
            ref: 'Educadora',
        },
        actividad:{
            type: String,
            required: true,
            match: /^([a-zA-Z,]+( [a-zA-Z,]+)+)$/
        },
        evaluacion:{
            type: String,
            required: false,
            match: /^([a-zA-Z ]+)$/
        }
    }
);

module.exports = mongoose.model('Rutina', RutinaSchema);