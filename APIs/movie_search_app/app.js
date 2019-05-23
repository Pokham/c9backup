var express = require("express");
var app = express(); // Storing the express package in the variable
var request = require("request");
app.set("view engine", "ejs");//Letting the server know that all files will be of ejs format

// The Root route
app.get("/", function(req, res){
    res.render("search");
});

// Making the GET request to get movie results
app.get("/results", function(req, res){
    var query = req.query.search;//Storing the data that the user searched for, into query
    var url = "http://www.omdbapi.com/?s=" + query;//Adding it with the "search" url and storing it in url variable
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)//Converting "body" from string to JS Object and storing in data
            res.render("results", {data:data});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});