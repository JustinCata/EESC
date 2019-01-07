var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({

        name     : String,
        email        : String,

});


// checking email cnfirmation
userSchema.methods.isEmailConfirmed = function() {
    return this.local.emailConfirmed;
};


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
