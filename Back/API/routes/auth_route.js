'use strict'

var auth_controller = require('../controller/auth_controller'),
    express = require('express'),
    router = express.Router()

router
    //Comando Ruta /auth
    .post('/auth',auth_controller.authenticate)

module.exports = router;