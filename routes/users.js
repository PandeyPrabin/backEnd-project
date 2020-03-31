var express = require ('express')
var app = express()
var User = require('../models/users')
var bcrypt = require('bcryptjs')
var passport = require('passport')

//Login Page
app.get('/login' , (req, res) => {
    res.render('login')
});

//Register Page
app.get('/register' , (req, res) => {
    res.render('register')
});

//register
app.post('/register' , (req, res) => {
        const{ firstname, lastname, email, password, password2 }=req.body
        let errors= [];

        //check required fields
        if(!firstname || !lastname || !email || !password || !password2){
            errors.push({msg: 'Please fill in all fields'})
        }

        //check password match
        if(password !== password2){
            errors.push({msg:'Passwords donot match'})
        }

        //check password length
        if(password.length < 6){
            errors.push({msg:'Passwords should be atleast 6 characters'})
        }
        if(errors.length > 0){
            res.render('register',{errors})
        }else{
            //validation passed
            User.findOne({email: email})
                .then(user => {
                    if(user) {
                        //if user already exists
                        errors.push({msg:'Email is already registered'})
                        res.render('register',{errors})
                    }else{
                        var newUser = new User({
                            firstname,
                            lastname,
                            email,
                            password
                        })
                       //Hash password
                       bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash)=>{
                            if(err) throw err;

                            //set password to hased password
                            newUser.password = hash;

                            //save user
                            newUser.save()
                            .then(user => {
                                req.flash('success_msg','You are now registered and can log in')
                                res.redirect('/users/login')
                            })
                            .catch(err => console.log(err))
                       }))
                    }
                })
        }
});
//Login handle
app.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: 'users/login',
        failureFlash: true
      })(req, res, next);
})

module.exports = app;

