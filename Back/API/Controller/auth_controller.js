'use strict'
var jwt = require('jsonwebtoken'),
    admin_payload = require('../models/admin_patriots_payload'),
    secret = require('../models/secret'),
    auth_controller = () =>{}

auth_controller.authenticate = (req,res,next)=>{
    let rol = req.body.rol
    console.log(id)
    let payload ={
        pass : admin_payload.pass,
        rol : rol
    }
    jwt.sign(payload,secret.secret,(err,token) =>{
        res.json({token})
    })
}

module.exports = auth_controller