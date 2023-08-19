const express = require('express');
const { addUserController, getUserController, getUserByUsernameController, deleteUserController, updateUserController } = require('../../controller/usuario/usuario.controller');
const router = express.Router();
const expressValidator = require('express-validator')
const validator = require('../../utils/validation.middleware');
const validateToken = require('../../utils/auth.middleware');

router.post(
  "/",
  expressValidator
    .body("username")
    .isString()
    .isLength({ min: 5, max: 20 })
    .withMessage(
      "El username debe ser un string y tener entre 5 y 20 caracteres."
    ),
  expressValidator
    .body("password")
    .matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/)
    .withMessage('El password debe contener al menos una letra y/o al menos un numero.')
    .isString()
    .isLength({ min: 5, max: 20 })
    .withMessage(
      "El password debe ser un string y tener entre 5 y 20 caracteres."
    ),
  validator,
  addUserController
);

router.get('/', validateToken, getUserController);

router.get('/:username', validateToken, getUserByUsernameController);

router.put('/:username', validateToken, updateUserController);

router.delete('/:username', validateToken, deleteUserController);

module.exports = router;