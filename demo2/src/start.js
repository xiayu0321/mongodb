var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo2');

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function () {
    let PersonSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    PersonSchema.methods.speak = function () {
        let greeting = this.name ? "my name is " + this.name + "my age is" + this.age : "nonono";
        console.log(greeting);
    };

    let PersonModel = mongoose.model('PersonModel', PersonSchema);
    let PersonEntityOne = new PersonModel({
        name: 'sunny',
        age: 15
    });

    PersonEntityOne.speak();

    PersonEntityOne.save(function (err) {
        console.log('save status:', err ? 'failed' : 'success');
    });

    let PersonEntityTwo = new PersonModel({
        name: 'rain',
        age: 20
    });

    PersonEntityTwo.speak();

    PersonEntityTwo  .save(function (err) {
        console.log('save status:', err ? 'failed' : 'success');
    })
});