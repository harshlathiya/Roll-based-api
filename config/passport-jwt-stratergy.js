const passport = require('passport');
const passportjwt = require('passport-jwt');
const ragister = require('../model/Admin/ragister')
const manager = require('../model/manager/ragister')
const user = require('../model/user/user')

const jwtStrategy = require('passport-jwt').Strategy;
const jwtExtract = require('passport-jwt').ExtractJwt;

var opts = {
    jwtFromRequest :jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'batch'
}

var opts1 = {
    jwtFromRequest :jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'batch_manager'
}
var opts2 = {
    jwtFromRequest :jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'batch_user'
}


passport.use(new jwtStrategy(opts , async function(record , done){
    let checkAdmin = await ragister.findById(record.data._id);
   
    if(checkAdmin){
        return done(null,checkAdmin)
    }
    else{
        return done(null,false);
    }
}))

passport.use('manager',new jwtStrategy(opts1 , async function(record , done){
    let checkmanager = await manager.findById(record.data._id);
   
    if(checkmanager){
        return done(null,checkmanager)
    }
    else{
        return done(null,false);
    }
}))
passport.use('user',new jwtStrategy(opts2 , async function(record , done){
    let checkuser = await user.findById(record.data._id);
   
    if(checkuser){
        return done(null,checkuser)
    }
    else{
        return done(null,false);
    }
}))

passport.serializeUser(function(user,done){
    return done(null,user.id)
})

passport.deserializeUser(async function(id,done){
    let recheck = await ragister.findById(id);

    if(recheck){
        return done(null,recheck);
    }
    else{
        return done(null,false);
    }
})