const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatriculaSchema = new Schema(
    {
        fecha:{
            type: Date,
            default: Date.now
        },
        valor:{
            type: Number,
            required: true
        },
        abono:{
            type: Number,
            required: true
        },
        parvulo:{
            type: Schema.ObjectId,
            ref: 'Parvulo',
            required: true
        },
        apoderado:{
            type: Schema.ObjectId,
            ref: 'Apoderado',
            required: true
        },
        apoderado2:{
            type: Schema.ObjectId,
            ref: 'Apoderado',

        },
        apoderado3:{
            type: Schema.ObjectId,
            ref: 'Apoderado',
        }
    }
);

module.exports = mongoose.model('Matricula', MatriculaSchema);