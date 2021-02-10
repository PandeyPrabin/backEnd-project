var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');


var UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userType: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    createdAt: { type: String, default: () => moment().format("DD.MM.YYYY")},
    emailVerificationToken: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
});

// Virtual for user full name
UserSchema
.virtual('name')
.get(function(){
    return this.firstname + ' ' + this.lastname;
});

//export model
module.exports = mongoose.model('users', UserSchema);
