var express = require ('express')
var app = express()


app.get('/' , (req, res) => {
    res.render('contact')
});

module.exports = app;
