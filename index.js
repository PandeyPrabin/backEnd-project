const express = require ('express');
const path = require ('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = new express();

var mongoDB = "mongodb+srv://Prabin:TurkuFinland@prabin-5muhx.mongodb.net/backEnd_project?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
	console.log('Successfully connected to the database');
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
}));
const ejs = require ('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //this helps direcct all css and bootstrap files 
                                                //from public folder
app.use(expressLayouts);




var about = require('./routes/about');
var contact = require('./routes/contact');
var createPost = require('./routes/createPost');
var index = require('./routes/index');
var post = require('./routes/post');
var register = require('./routes/register');
const { toUnicode } = require('punycode');


app.use('/about', about);
app.use('/contact', contact);
app.use('/createPost', createPost);
app.use('/', index);
app.use('/post', post);
app.use('/register', register);
app.use('/login', login);




app.listen(4000, () =>{
    console.log('app listening on port http://127.0.0.1:4000/')
});