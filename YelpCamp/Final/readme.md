# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
    * Name
    * Image
    
[
    {name:"Salmon Creek", image: "http://www.image.com"}
]

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Camprounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTFUL routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/templates

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js filed
* Run the seeds file ever time the server starts

# Add the Comment model
* Make our errors go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES

name        url         verb    description
=============================================================
INDEX       /dogs       GET     Display a list of all dogs
NEW         /dogs/new   GET     Display form to make a new dog
CREATE      /dogs       POST    Add new dog to DB
SHOW        /dogs/:id   GET     Shows info about one dog

            /campgrounds
            /campgrounds/new
            /campgrounds
            /campgrounds/:id
            
NEW        campgrounds/:id/comments/new
CREATE     campgrounds/:id/comments

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# Auth Pt 1 - Add User Model
* Install all packages needed for auth
    *npm install passport passport-local passport-local-mongoose express-session --save 

* app.js
    *passport = require("passport"),
    *LocalStrategy = require("passport-local") 

* Define User model
    *app.js
        *User = require("./models/user")
    
    *user.js
        *var passportLocalMongoose = require("passport-local-mongooose");
        *UserSchema.plugin(passportLocalMongoose);

# Auth Pt 2 - Register
* Configure Passport
    *app.use(passport.initialize());
    *app.use(passport.session());
    *passport.use(new LocalStrategy(User.authenticate()));
    *passport.serializeUser(User.serializeUser());
    *passport.deserializeUser(User.deserializeUser());
    
* Add register routes
    * app.js
        * register.ejs
* Add register templates

# Auth Pt 3 - Login
* Add login routes
*   *login.ejs
* Add login template

# Auth Pt 4- Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

# Auth Pt 5 = Show/Hide Links
* Show/hide auth links correctly

# Refactor The Routes
* Use Express router to reorganize all routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button

# Authorization Pt 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments S37, L354
* Add Edit route for comments
  <!--- router.get - comments.js-->
* Add Edit button
* Add Update route

 Campground Edit Route:<!--/campgrounds/:id/edit-->
 Comment Edit Route: <!--/campgrounds/:id/comments/:comment_id/edit-->

# Deleting Comments S37, L356
* Add Destroy route 
    router.delete - comments.js
* Add Delete button
    public/stylesheets/main.css
    <form class="delete-form" - show.ejs

 Campground Destroy Route:<!--/campgrounds/:id-->
 Comment Destroy Route: <!--/campgrounds/:id/comments/:comment_id-->

# Authorization Pt 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header


RESTFUL ROUTES

name        url     verb        description
====================================================================
