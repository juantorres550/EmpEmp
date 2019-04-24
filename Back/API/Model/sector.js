var firebase = require('./server');
var db1 = firebase.database().ref('pivot/sector_pivot');
var db2 = firebase.database().ref('pivot/sector_descrip');
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
        let ref = db1.child('Musica');
        return ref.once('value',callback,callback);
    },
    get_music_descrip_all:function(callback){
        let ref = db2.child('Musica');
        return ref.once('value',callback,callback);
    },
    get_arte_all:function(callback){
        let ref = db1.child('Arte');
        return ref.once('value',callback,callback);
    },
    get_arte_descrip_all:function(callback){
        let ref = db2.child('arte');
        return ref.once('value',callback,callback);
    },
    get_cine_all:function(callback){
        let ref = db1.child('Cine');
        return ref.once('value',callback,callback);
    },
    get_cine_descrip_all:function(callback){
        let ref = db2.child('Cine');
        return ref.once('value',callback,callback);
    },
    get_lit_all:function(callback){
        let ref = db1.child('Literatura');
        return ref.once('value',callback,callback);
    },
    get_lit_descrip_all:function(callback){
        let ref = db2.child('Literatura');
        return ref.once('value',callback,callback);
    },
    get_cult_all:function(callback){
        let ref = db1.child('Cultura');
        return ref.once('value',callback,callback);
    },
    get_cult_descrip_all:function(callback){
        let ref = db2.child('Cultura');
        return ref.once('value',callback,callback);
    },
    get_cenev_all:function(callback){
        let ref = db1.child('CenEventos');
        return ref.once('value',callback,callback);
    },
    get_cenev_descrip_all:function(callback){
        let ref = db2.child('CenEventos');
        return ref.once('value',callback,callback);
    }
};
module.exports = sector;