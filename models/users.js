var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    userType: String,
    email: String,
    password: String,
    phoneNumber: Number,
    createdAt: Date,
    emailVerificationToken: String,
    passwordResetToken: String,
    passwordResetExpires: Date
});

// Virtual for user full name
UserSchema
.virtual('name')
.get(function(){
    return this.firstname + ' ' + this.lastname;
});

//export model
module.exports = mongoose.model('users', UserSchema);