var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var PostSchema = ({
    title: String,
    authors:[{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'genres'
    }],
    description: String,
    date: { type: String, default: () => moment().format("DD.MM.YYYY")},
    comments: [{
        comment: String,
        commenter: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        date: { type: String, default: () => moment().format("DD.MM.YYYY")},
    }],
});

// Exposrts module
module.exports = mongoose.model('posts', PostSchema)