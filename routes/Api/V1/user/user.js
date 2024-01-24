const express = require('express');

const routes =  express.Router();
const passport = require('passport');


const user = require('../../../../model/user/user');
const userController = require('../../../../controller/Api/V1/user/userController');

routes.post('/add_user',user.uplodeimg,userController.add_user);
routes.post('/login',userController.login)
routes.put('/user_edit/:id',passport.authenticate('user',{failureRedirect:"/faillogin"}),user.uplodeimg,userController.user_edit)
routes.get('/profile',passport.authenticate('user',{failureRedirect:"/faillogin"}),userController.profile)

routes.get("/faillogin" ,async (req,res) =>{
    return res.status(400).json({msg:'invalid Login',status:0});
});

module.exports  =routes;