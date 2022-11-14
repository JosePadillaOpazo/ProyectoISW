const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AntecedenteSchema = new Schema(
    {
        

        parvulo:{
            type:Schema.ObjectId,
            ref: 'Parvulo'
        },
        discapacidad:{
            type:Schema.ObjectId,
            ref: 'Discapacidad'
        },
        enfermedad:{
            type:Schema.ObjectId,
            ref: 'Enfermedad'
        },
        cuidado:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Antecedente', AntecedenteSchema);