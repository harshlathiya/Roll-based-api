const express = require('express');

const port = 8001;
const db = require('./config/mongoose')
const app = express();
const ragister = require('./model/Admin/ragister');
const passport = require('passport');
const passportjwt = require('./config/passport-jwt-stratergy');
const session = require('express-session');

app.use(express.urlencoded());



app.use(session({
    name:'JWTSESSION',
    secret: 'batch',
    resave: true,
    saveUninitialized: false,
    cookie: { 
        maxAge : 1000*60*100
     }
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/admin',require("./routes/Api/V1/Admin/admin"));
  app.use('/',require("./routes/Api/V1/user/user"));
app.listen(port,(err) =>{
    if(err){
        console.log('something wrong')
    }
    console.log('connected on port',port);
})