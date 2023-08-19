const express = require('express');
const { addCotizacionController, getCotizacionController } = require('../../controller/cotizacion/cotizacion.controller');
const router = express.Router();
const expressValidator = require('express-validator')
const validator = require('../../utils/validation.middleware');
const validateToken = require('../../utils/auth.middleware');

router.post('/', validateToken,
    expressValidator
        .body("valorPesos")
        .isNumeric()
        .withMessage(
            "El valor Pesos debe ser un numero"
        ),
        validator,
        addCotizacionController);

router.get('/', validateToken ,getCotizacionController)

module.exports = router;