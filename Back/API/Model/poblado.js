var firebase = require('./server');
var db = firebase.database().ref('Sector/Poblado');
var poblado ={
    //CRUD

    //READ
    get_music_all:function(callback){
        let ref = db.child('Musica')
        return ref.on('value',callback);
    }

};
module.exports = poblado