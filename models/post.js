var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
     title: {
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
    // post: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    // nessage: String,
    // viewed: { 
    //     type: String, 
    //     default: () => moment().format("DD.MM.YYYY")
    // },
    // date: {
    //     type: String, 
    //     default: () => moment().format("HH:mm")
    // }
});

module.exports = mongoose.model('post', postSchema);