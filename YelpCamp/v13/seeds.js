var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

//Define arrays of data
var data = [
        {   // seed
            name: "Lory State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdixRpK-tsYWOGtflNRI-NSQL_pg8OnepjBU47hLVFSdQUJPbXBg",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            name: "Roxborough State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9nrmKiznWfw1sM9Mrtqsww6NMVgHKGxMlv46i8seGgZyLtDz",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ",
        },
        {   
            name: "Tennesse State Park",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bcuUn6eJ2mZRjpdDAHgwth58h0AEJ6IfKemJhu9eD9orDpJ7",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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
    
//    Add campgrounds
//    Looping thoroug and adding each one using Campground.create({})
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
