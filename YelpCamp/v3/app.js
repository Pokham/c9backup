var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),// Campground.find({}) & Campground.create({})
    seedDB      = require("./seeds"); // seeds.js
 
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();// execute

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX route that shows all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err); //If error print out error
        } else { //Take all the campgrounds that cameback and send them through to the campground that EJS has filed
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
});

// CREATE route where you can create a new campground
app.post("/campgrounds", function(req, res){
    // get data from form and add campground arrays
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name, image:image, description:desc}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
   
});

//NEW route that show the from what will send the data to the post route
// Must be declared first
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided Id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});