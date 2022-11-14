const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MatriculaSchema = new Schema(
    {
        fecha:{
            type: Date,
            required: true
        },
        valor:{
            type: String,
            required: true
        },
        abono:{
            type: Number,
            required: true
        },
        parvulo:{
            type: Schema.ObjectId,
            ref: "Parvulo",
            required: true
        }
    }
);

module.exports = mongoose.model('Matricula', MatriculaSchema);