const express = require('express');

const routes =  express.Router();
const passport = require('passport');

const ragister = require('../../../../model/manager/ragister');
const managerController = require('../../../../controller/Api/V1/manager/managerController');

routes.post('/add_manager',passport.authenticate('jwt',{failureRedirect:"/admin/manager/faillogin"}),ragister.uplodeimg,managerController.add_manager);
routes.get('/profile',passport.authenticate('manager',{failureRedirect:"/admin/manager/faillogin"}),managerController.profile)
routes.put('/editprofile/:id',passport.authenticate('manager',{failureRedirect:"/admin/manager/faillogin"}),ragister.uplodeimg,managerController.editprofile)
routes.post('/login',managerController.login)

routes.get('/viewalluser',passport.authenticate('manager',{failureRedirect:"/admin/manager/faillogin"}),managerController.viewalluser)

routes.get("/faillogin" ,async (req,res) =>{
    return res.status(400).json({msg:'invalid Login',status:0});
});


module.exports  =routes;