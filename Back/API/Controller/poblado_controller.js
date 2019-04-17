'use strict'

var poblado_model = require('../Model/poblado'),
    poblado_controller = () => {}

    poblado_controller.get_music_all = (req,res,next)=>{
        poblado_model.get_music_all((cb)=>{ //cb = callback
            if(cb.val!=null){
                res.json(cb.val())  //Existen datos
            }else{
                res.json(404,cb.code) //No existen datos, algo malo paso
            }
        })
    }

module.exports = poblado_controller