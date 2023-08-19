require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) =>{
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({message: 'Acceso invalido. Token desconocido.' });
      }
    try {
        const tokenSecretKey = process.env.TOKEN_SECRET_KEY || "";
        const descifrado = jwt.verify(token, tokenSecretKey); 
        req.user = descifrado; 
        next();
      } catch (error) {
        res.status(400).json({ message: 'Token invalido.' });
      }
};

module.exports = validateToken; 