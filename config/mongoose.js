const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Apis_harsh_admin');

const db = mongoose.connection;

db.once('open',function(err){
    if(err){
        console.log('db not connectred')
    }
    console.log('db connected');
})

module.exports = db;