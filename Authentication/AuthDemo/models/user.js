var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//app.js
//passport.use(new LocalStrategy(User.authenticate()));
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);