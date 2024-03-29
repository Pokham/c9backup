var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("Welcome to the Comments page!");
});

app.get("*", function(req, res) {
    res.send("You are a star!");
});


// Tell Express to listen for request(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});