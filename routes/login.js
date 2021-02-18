var express = require ('express')
var app = express()
var User = require('../models/users')
var bcrypt = require('bcryptjs')
var passport = require('passport')

//Login Page
app.get('/' , (req, res) => {
    res.render('login')
});

//Login handle
app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
      })(req, res, next)
}) 

//Logout handle
app.get('/logout', (req,res) =>{
    req.logOut()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/users/login')
})

module.exports = app;

