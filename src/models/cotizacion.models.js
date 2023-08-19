const { Schema, default: mongoose } = require("mongoose");

const cotizacionSchema = Schema({
    valorPesos:{
        type: Number,        
        required: [true, "El valor de Pesos es obligatorio"],
    },
    tipoDolar:{
        type: String,
        required: [true, "El tipo de dolar es requerido"],
    },
    cotizacionDolar:{
        type: Number,
        required: [true, "La cotizacion del dolar es requerida"],
    },
    cotizacion:{
        type: Number
    },
    fechaCotizacion:{
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const CotizacionModel = mongoose.model('cotizacion', cotizacionSchema);
module.exports= CotizacionModel;