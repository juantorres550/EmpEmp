'use strict'

var sector_controller = require('../controller/sector_controller'),
    express = require('express'),
    router = express.Router()

    router
        .get('/sector',verify,sector_controller.get_all)
        .get('/sector/music',verify,sector_controller.get_music_all)
        .get('/sector/arte',verify,sector_controller.get_arte_all)
        .get('/sector/cine',verify,sector_controller.get_cine_all)
        .get('/sector/lit',verify,sector_controller.get_lit_all)
        .get('/sector/cult',verify,sector_controller.get_cult_all)
        .get('/sector/cenev',verify,sector_controller.get_cenev_all)
        .get('/sector/descrip',verify,sector_controller.get_descrip_all)
        .get('/sector/descrip/music',verify,sector_controller.get_music_descrip_all)
        .get('/sector/descrip/arte',verify,sector_controller.get_arte_descrip_all)
        .get('/sector/descrip/cine',verify,sector_controller.get_cine_descrip_all)
        .get('/sector/descrip/lit',verify,sector_controller.get_lit_descrip_all)
        .get('/sector/descrip/cult',verify,sector_controller.get_cult_descrip_all)
        .get('/sector/descrip/cenev',verify,sector_controller.get_cenev_descrip_all)


//Verify TOKEN
/* Formato de los Headers
	Authorization: Bearer <access_token>*/
        function verify(req,res,next){
                let bearer_header = req.headers['authorization'],
                    bearer,
                    bearer_token
                // Revisa si es no definido
                if(typeof bearer_header != 'undefined'){
                    //separa el bearer
                    bearer = bearer_header.split(' ')
                    // obtiene el token
                    bearer_token = bearer[1]
                    //lo almacena
                    req.token = bearer_token
                    //continua
                    next()
                }else{
                    res.json(403,{
                        error: 1,
                        msg: 'FORBIDDEN'
                    })
                }
        }
module.exports =router