const express = require ('express');
const path = require ('path');
const expressLayouts = require('express-ejs-layouts');


const app = new express();
const ejs = require ('ejs');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //this helps direcct all css and bootstrap files 
                                                //from public folder
app.use(expressLayouts);


var about = require('./routes/about');
var contact = require('./routes/contact');
var index = require('./routes/index');
var post = require('./routes/post');



app.use('/', index);
app.use('/about', about);
app.use('/contact', contact);
app.use('/post', post);



app.listen(4000, () =>{
    console.log('app listening on port http://127.0.0.1:4000/')
});