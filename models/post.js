var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
     title: {
        type: String, 
        required: true
        },
    author: {
        type: String,
        required: true
        },
     email: {
        type: String, 
        required: true
        },
    phonenumber: {
        type: String, 
        required: true
        },
    message: {
        type: String, 
        required: true
        }
        
});

module.exports = mongoose.model('post', postSchema);