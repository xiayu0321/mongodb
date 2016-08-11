var db = require('./db.js');

db.connect();

var User = require('./user.js');

User.find({},function (err,users) {
    if(err)
        throw err;

    console.log("All users");
    console.log(users);
});
