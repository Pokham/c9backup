var express                 = require("express"),
    mongoose                = require("mongoose"), //user.js
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"), //user.js
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");//user.js
    

mongoose.connect("mongodb://localhost:27017/auth_demo_app",{useNewUrlParser: true});

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Mocking bird, have your heard?",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate())); //user.js
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===============
// ROUTES
//===============


app.get("/", function(req, res){
    res.render("home"); //home.ejs
});


app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret"); //secret.ejs
});

// Auth Routes

// show sign up form
app.get("/register", function(req, res) {
    res.render("register"); //register.ejs
});

//handling user sign up
//register.ejs -<form action="/register" method="POST">
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

// LOGIN ROUTES
// render login form

app.get("/login",function(req, res) {
    res.render("login");
});

// login logic
// middleware
app.post("/login",passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started......");
});