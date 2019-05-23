var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
        {name: "Silver Falls State Park", image:"https://4.bp.blogspot.com/-EpmFwPKpaAI/WqLQAGeS9TI/AAAAAAAAQXs/F-JPEN6HjV0HpRH79puH7OvupUlqZm6JACLcBGAs/s640/OR-SILVERTON-Silver%2BFalls%2BState%2BPark-Trail%2Bof%2BTen%2BFalls-sign-c2017%2BCarole%2BTerwilliger%2BMeyer-600pixs.JPG"},
        {name: "Letchworth State Park", image:"http://www.hikethruny.com/img/portal/watkins.jpg"},
        {name: "Temperance River State Park", image: "https://www.northshorevisitor.com/wp-content/uploads/2015/04/tatepark-temperance-hike.jpg"},
        {name: "Baxter State Park", image:"https://bdn-data.s3.amazonaws.com/uploads/2015/05/10018901_H15118381-600x600.jpg"},
        {name: "Shadmore State Park", image:"https://www.decorartsnow.com/wp-content/uploads/2016/06/montauk-guide-ocean-and-rocks-600x600.jpg"},
        {name: "Brazos State Park", image:"https://fastly.4sqi.net/img/general/600x600/575261_RpLVwRXlJonkh3smKpU3n32NjOSbPSm1iLGFEQUFNic.jpg"},
        {name: "MN State Park", image: "https://www.outsideinduluth.com/wp-content/uploads/2017/12/Carley-State-Park-Fun-600x600.jpg"},
        {name: "Roxborough State Park", image: "http://www.katetheglobetrotter.com/wp-content/uploads/2017/01/16143775_10208470973713233_1652724615196230712_o-600x600.jpg"}
];


app.get("/", function(req, res){
    res.render("landing");
});

// route that shows all campgrounds
app.get("/campgrounds", function(req, res){
  
    res.render("campgrounds",{campgrounds:campgrounds});
});

// route where you can create a new campground
app.post("/campgrounds", function(req, res){
    // get data from form and add campground arrays
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// route that show the from what will send the data to the post route
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});