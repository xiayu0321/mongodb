let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo3');

let db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
    let kittySchema = mongoose.Schema({
        name: String
    });

    kittySchema.methods.speak = function () {
        let greeting = this.name ? "Meow name is" + this.name : "I haven't name";
        console.log(greeting);
    };
    let Kitten = mongoose.model('Kitten', kittySchema);
    let flu = new Kitten({name: 'flu'});
    flu.speak();
    Kitten.find(function (err, Kittens) {
        if (err) return console.error(err);
        // console.log(Kittens);
    });
    flu.save(function (err) {
        console.log('save status:', err ? 'failed' : 'success');
    });
   /* let a = Kitten.find({name: 'flu'}).pretty();
    if(a){
        console.log("1111111111111");
    }
    console.log(a);
    */
});