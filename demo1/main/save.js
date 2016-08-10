var db = require('./db.js');
var User = require('./user.js');
var xiayu= new User({
    name: "Xiayu",
    admin: true
});

db.connect();

xiayu.save(function(err) {
    if(err) throw err;

    console.log('User saved');

    db.close();
});