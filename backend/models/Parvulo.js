const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema(
    {
        rut:{
            type: String,
            required: true,
            unique: true,
            max: 14,
            match: /^[0-9]{7,8}[-|‐]{1}[0-9kK]{1}$/
        },
        nombre:{
            type: String,
            required: true,
            match: /^([a-zA-Z]+( [a-zA-Z]+)+)$/
        },
        fecha_de_nac:{
            type: Date,
            required: true
        },
        grado:{
            type: Schema.ObjectId,
            ref:'Grado',
            required: true
        },
    }
);

module.exports = mongoose.model('Parvulo', ParvuloSchema);