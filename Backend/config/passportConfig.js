const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

var customerSchema = mongoose.model('customer');

passport.use(
    new localStrategy(
        //{usernameField : username},
        (username,password,done) => {
            customerSchema.findOne({username},
                (err,user )=>{
                    if(err)
                        return done(err)
                
                else if (!user)
                    return  done(null,false,{message : 'User not Found'})
                
                else if (!user.verifyPassword(password))
                    return done(null,false,{message : 'Wrong Password'})
                else 
                    return done(null,user)
                })
        })
)       