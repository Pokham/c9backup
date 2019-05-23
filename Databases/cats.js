var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


// adding a new cat to the DB
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });
// save to the database, 2 parameters, cat call back from the DB
// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!")
//     } else{
//         console.log("We just saved a cat to the DB")
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    termperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, Error!");
        console.log(err);
    } else {
        console.log("All the Cats....");
        console.log(cats)
    }
});