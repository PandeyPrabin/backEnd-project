var express = require ('express')
var app = express()


app.get('/' , (req, res) => {
    res.render('about')
});

module.exports = app;
