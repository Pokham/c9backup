var mongoose = require("mongoose"); // module.export

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }    
    ]
});

// Compiling a schema into a model
// seed.js - var Campground = require("./models/campground");
module.exports = mongoose.model("Campground", campgroundSchema);