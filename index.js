const express = require ('express')
const app = new express()
var expressLayouts = require('express-ejs-layouts');
const path = require ('path')
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');


//const router = express.router()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: 'application/*+json'
}));

//app.use(expressValidator());
app.use(express.static(path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
//app.engine('ejs', expejs({extname: 'ejs', defaultlayout: 'mainlayout', layoutsDir: __dirname+'/views/layouts'}))
app.set('view engine', 'ejs');
//app.use(expressLayouts);

app.get('/', function(req, res){
    res.render('admin/hello')
})

//app.use(express.static('public'))


app.listen(4000, () =>{
    console.log('app listening on port http://127.0.0.1:4000/')
})