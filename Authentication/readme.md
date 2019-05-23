# Authentication

# Intro to Authentication
* What tools are we using?
*   Passport
*   Passport Local
*   Passport Local Mongoose
* Walk through auth flow
* Discuss sessions
*   Express-Session

# Auth Code Part 1
* Set up folder structure
*   * mkdir AuthDemo
*       *mkdir views
*           *touch views/home.ejs
*           *touch views/secret.ejs
*           *touch views/register.ejs
*           *touch views/login.ejs
*       *mkdir models
*           *touch models/user.js
*   
* Install needed packages
*   * npm init
*   * npm install express mongoose --save
*   * npm install passport passport-local --save
*   * npm install passport passport-local-mongoose --save
*   * npm install body-parser express-session --save
*   * npm install ejs --save
* Add root route and template
* Add secret route and template

# Auth Code Part 2
* Create User model
*   *user.js
* Configure passport
    *app.use(passport.initialize());
    *app.use(passport.session());
    *passport.serializeUser(User.serializeUser());
    *passport.deserializeUser(User.deserializeUser());

# Auth Code Part 3
* Add Register routes
*   * app.js
* Add Register form

# Auth Code Part 4
* Add Login routes
*   *app.js
* Add Login form
    *login.ejs

# Auth Code Part 5
* Add Logout Route
* Add isLoggedIn middleware
*   app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret"); //secret.ejs
    });

*   function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
    }

