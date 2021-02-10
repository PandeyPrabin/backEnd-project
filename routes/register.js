var express = require ('express')
var app = express()
const User = require ('../models/users')
var bcrypt = require('bcryptjs')
var passport = require('passport')

//Register Page

app.get('/' , (req, res) => {
    res.render('register')
});


//register
app.post('/' , (req, res) => {
        const{ firstName, lastName, email, password, phoneNumber, passwordValidate }=req.body
        let errors= [];

        //check required fields
        if(!firstName || !lastName || !email || !phoneNumber || !password || !passwordValidate){
            errors.push({msg: 'Please fill in all fields'})
        }

        //check password match
        if(password !== passwordValidate){
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
                            firstName,
                            lastName,
                            email,
                            phoneNumber,
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
                                // res.redirect('/users/login')
                                res.redirect('/')
                            })
                            .catch(err => console.log(err))
                       }))
                    }
                })
        }
});



module.exports = app;


