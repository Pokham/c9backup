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
* 