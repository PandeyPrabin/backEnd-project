const express = require ('express');
const path = require ('path');
const expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash')
var session = require('express-session')
var passport = require('passport')

const app = new express();

//Passport config
require('./config/passport')(passport)

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

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }))

  //Passport Middlware
app.use(passport.initialize());
app.use(passport.session());

  //connect flash
  app.use(flash())

  //Global vars
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
});

//templete engine
const ejs = require ('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //this helps direcct all css and bootstrap files 
                                                //from public folder
app.use(expressLayouts);


var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var index = require('./routes/index');
var post = require('./routes/post');
var posts = require('./routes/posts');



app.use('/', index);
app.use('/users', users);
app.use('/about', about);
app.use('/contact', contact);
app.use('/show', posts);
app.use('/new', post)



app.listen(4000, () =>{
    console.log('app listening on port http://127.0.0.1:4000/')
});