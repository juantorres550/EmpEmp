var firebase = require('./server');
var db1 = firebase.database().ref('sector');
var db2 = firebase.database().ref('sector_descrip');
var sector ={
    //CRUD

    //READ
    get_all:function(callback){
        return db1.once('value',callback,callback);
    },
    get_descrip_all:function(callback){
        return db2.once('value',callback,callback);
    },
    get_music_all:function(callback){
        let ref = db1.child('musica');
        return ref.once('value',callback,callback);
    },
    get_music_descrip_all:function(callback){
        let ref = db2.child('musica');
        return ref.once('value',callback,callback);
    },
    get_arte_all:function(callback){
        let ref = db1.child('arte');
        return ref.once('value',callback,callback);
    },
    get_arte_descrip_all:function(callback){
        let ref = db2.child('arte');
        return ref.once('value',callback,callback);
    },
    get_cine_all:function(callback){
        let ref = db1.child('cine');
        return ref.once('value',callback,callback);
    },
    get_cine_descrip_all:function(callback){
        let ref = db2.child('cine');
        return ref.once('value',callback,callback);
    },
    get_lit_all:function(callback){
        let ref = db1.child('literatura');
        return ref.once('value',callback,callback);
    },
    get_lit_descrip_all:function(callback){
        let ref = db2.child('literatura');
        return ref.once('value',callback,callback);
    },
    get_cult_all:function(callback){
        let ref = db1.child('cultura');
        return ref.once('value',callback,callback);
    },
    get_cult_descrip_all:function(callback){
        let ref = db2.child('cultura');
        return ref.once('value',callback,callback);
    },
    get_cenev_all:function(callback){
        let ref = db1.child('cen_eventos');
        return ref.once('value',callback,callback);
    },
    get_cenev_descrip_all:function(callback){
        let ref = db2.child('cen_eventos');
        return ref.once('value',callback,callback);
    }
};
module.exports = sector;