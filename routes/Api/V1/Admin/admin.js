const express = require('express');

const routes =  express.Router();
const passport = require('passport');
const ragister = require('../../../../model/Admin/ragister');
const Admincontroller = require('../../../../controller/Api/V1/Admin/AdminController');



routes.post('/ragister',ragister.uplodeimg,Admincontroller.ragister)
routes.put('/editprofile/:id',passport.authenticate('jwt',{failureRedirect:"/admin/faillogin"}),ragister.uplodeimg,Admincontroller.editprofile)
routes.get('/profile',passport.authenticate('jwt',{failureRedirect:"/admin/faillogin"}),Admincontroller.profile)
routes.post('/login',Admincontroller.login)
routes.get("/faillogin" ,async (req,res) =>{

    return res.status(400).json({msg:'invalid Login',status:0});

})


routes.get('/view_All_manager',passport.authenticate('jwt',{failureRedirect:"/admin/faillogin"}),Admincontroller.view_All_manager)


routes.use('/manager',require('../manager/manager'));

routes.delete('/deleteManager/:id',passport.authenticate("jwt",{failureRedirect:"/admin/failLogin"}),Admincontroller.deleteManager);

routes.get('/viewalluser',passport.authenticate('jwt',{failureRedirect:"/admin/faillogin"}),Admincontroller.viewalluser)

routes.get('/viewallAdmin',passport.authenticate('jwt',{failureRedirect:"/admin/faillogin"}),Admincontroller.viewalladmin)

module.exports = routes ;

