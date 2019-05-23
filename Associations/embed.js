var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);

// USER - emial, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "adalovelace.edu",
    name: "Ada Lovelace"
});

// add user to the post
// newUser.posts.push({
//     title: "Girl Boss",
//     content: "I'm not only a girl, I'm a Scientist."
    
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({name: "Ada Lovelace"}, function(err, user){
    if(err){
       // console.log(err);
    } else {
        user.posts.push({
            title: "3 words I really hate",
            content: "NO, you can't!"
        });
        user.save(function(err, user){
            if(err){
                console.log(err)
            } else {
                console.log(user)
            }
        });
    }
});