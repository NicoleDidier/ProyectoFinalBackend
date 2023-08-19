const UsuarioModel = require("../../models/usuario.models");
require('dotenv').config();
const jwt = require('jsonwebtoken');

const loginController = async(req, res) =>{
    const { username, password } = req.body;
    const tokenSecretKey = process.env.TOKEN_SECRET_KEY || "";
    const user = await UsuarioModel.findOne({ username, password })
    if(user){
        const token = jwt.sign({ username:user.username, rol:user.rol}, tokenSecretKey)
        res.json({access_token: token})
    }else{
        res.json({message:'Usuario y/o contraseña inválido'})
    }
}

module.exports = { loginController };