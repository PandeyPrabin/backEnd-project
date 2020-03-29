var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = ({
    name: String
});

//Module exports
module.exports = mongoose.model('genres', GenreSchema)