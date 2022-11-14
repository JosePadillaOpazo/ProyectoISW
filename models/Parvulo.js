const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema(
    {
        rut:{
            type: String,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        fecha_de_nac:{
            type: Date,
            required: true
        },
        grado:{
            type: String,
            enum:[
                "Menor",
                "Intermedio",
                "Mayor"
            ],
            required: true
        },
    }
);

module.exports = mongoose.model('Parvulo', ParvuloSchema);