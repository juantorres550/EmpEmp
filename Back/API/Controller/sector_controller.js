'use strict'

var jwt = require('jsonwebtoken'),
    secret = require('../model/secret'),
    admin_payload = require('../model/admin_payload'),
    sector_model = require('../model/sector'),
    sector_controller = () => {}

    sector_controller.get_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_music_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_music_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_music_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_music_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_arte_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_arte_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_arte_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_arte_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cine_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cine_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cine_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cine_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_lit_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_lit_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_lit_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_lit_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cult_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cult_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cult_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cult_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cenev_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cenev_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }
    sector_controller.get_cenev_descrip_all = (req,res,next)=>{
        jwt.verify(req.token,secret.secret,(err,payload)=>{
            if(err){
                res.json(403,{
                    error: 1,
                    msg: 'FORBIDDEN'
                })
            }else if(payload.pass == admin_payload.pass){
                sector_model.get_cenev_descrip_all((cb)=>{ //cb = callback
                    if(cb.val!=null){
                        res.json(cb.val())  //Existen datos
                    }else{
                        res.json(404,cb.code) //No existen datos, algo malo paso
                    }
                })
            }else{
                res.json(401,{
                    error: 1,
                    msg: 'No Autorizado'
                })
            }
        })
    }

module.exports = sector_controller