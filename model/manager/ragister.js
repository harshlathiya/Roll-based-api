const mongoose = require('mongoose');
const path = require('path')
const imgpath = ("/uploads/manager")
const multer = require('multer')

const ragisterschems = mongoose.Schema({
    name : {
        type : String 
    },
    password : {
        type : String 
    },
    city : {
        type : String 
    },
    hobby : {
        type : Array 
    },
    gender : {
        type : String 
    },
    Adminimage : {
        type : String 
    },
    adminids : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'ragister',
        required : true 
    },
    email : {
        type : String 
        
    }
})


const Imagestorage =  multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,path.join(__dirname , "../.." ,imgpath))
    },

    
    filename :(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now());
    }
})


ragisterschems.statics.uplodeimg = multer({storage : Imagestorage}).single('Adminimage');
ragisterschems.statics.imageAdminPath = imgpath;

const managers = mongoose.model('managers',ragisterschems);

module.exports = managers;  