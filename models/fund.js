var mongoose = require('mongoose');


// define the schema for our user model
var fundSchema = mongoose.Schema({

        name: String,
        email: String,
        iota: Number,
        dollars: Number,
        address: String,
        city: String,
        states: String,
        zip: String,
        country: String,
        tag: String,
        tier: String,
        size: String

});


// checking email cnfirmation
fundSchema.methods.isEmailConfirmed = function() {
    return this.local.emailConfirmed;
};


// create the model for users and expose it to our app
module.exports = mongoose.model('Fund', fundSchema);
