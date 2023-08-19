const { Schema, default: mongoose } = require("mongoose");

const usuarioSchema = Schema({
    username:{
        type: String,
        required: [true, "El username es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    rol: {
        type: String,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
     isActive: {
        type: Boolean,
        default: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const UsuarioModel = mongoose.model('Usuario', usuarioSchema);
module.exports= UsuarioModel;
