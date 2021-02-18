var express = require ('express');
var app = express();
const bcrypt = require('bcrypt');
const User = require('../models/users')

app.get('/' , (req, res) => {
    res.render('login')
});

module.exports = app;
