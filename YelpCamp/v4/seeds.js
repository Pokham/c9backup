var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

//Define arrays of data
var data = [
        {   // seed
            name: "Lory State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdixRpK-tsYWOGtflNRI-NSQL_pg8OnepjBU47hLVFSdQUJPbXBg",
            description: "Trail Ride",
        },
        {
            name: "Roxborough State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9nrmKiznWfw1sM9Mrtqsww6NMVgHKGxMlv46i8seGgZyLtDz",
            description: "Big rocks, small rocks, we have them all! ",
        },
        {   
            name: "Tennesse State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bcuUn6eJ2mZRjpdDAHgwth58h0AEJ6IfKemJhu9eD9orDpJ7",
            description: "A lot of history here!",
        }
    ]


// app.js - seedDB()
function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
    
    //Add campgrounds
    //Looping thoroug and adding each one using Campground.create({})
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a  campground");
                    //create a Comment  - Comment = require("./models/comment");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);//push it into the comments array
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        }); 
    });
}

module.exports = seedDB;
