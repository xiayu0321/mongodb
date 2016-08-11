var db = require('./db.js');
var User = require('./user.js');
var xiayu= new User({
    name: "Xiayu",
    admin: true
});

var wrx = new User({
    name:"Wrx",
    admin:false
});

db.connect();

xiayu.save(function(err) {
    if(err) throw err;

    console.log('xiayu saved');
});

wrx.save(function(err) {
    if(err) throw err;

    console.log('wrx saved');

});
