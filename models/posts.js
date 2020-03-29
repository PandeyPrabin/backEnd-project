var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = ({
    title: String,
    authors:[{
        type: Schema.objectId,
        ref: 'users'
    }],
    genres: [{
        type: Schema.objectId,
        ref: 'genres'
    }],
    createdAt: Date,
    comments: [{
        comment: String,
        commenter: {
            type: objectId,
            ref: 'users'
        },
        date: date
    }],
});

// Exposrts module
module.exports = mongoose.model('posts', PostSchema)