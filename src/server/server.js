const express = require ('express');
const usuarioRouter = require('../routes/usuario/ususario.routes');
const authRouter = require('../routes/auth/auth.routes');
const cotizacionRouter = require('../routes/cotizacion/cotizacion.routes');
const routeError = require('../utils/errores.middleware');
const server = express();

server.use(express.json());

server.use('/user', usuarioRouter);

server.use('/auth', authRouter);

server.use('/cotizacion', cotizacionRouter)

server.use(routeError);

module.exports = server;