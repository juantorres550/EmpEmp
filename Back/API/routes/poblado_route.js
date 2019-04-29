'use strict'

var poblado_controller = require('../Controller/poblado_controller'),
    express = require('express'),
    router = express.Router()

    router
        .get('/poblado/music',poblado_controller.get_music_all)

module.exports =router