const express = require('express')
const router = express.Router()
const UsersModel = require('../models/UsersModel')
const bcryptjs = require('bcryptjs')

 router.get(
    '/new-account', (req,res) => {
        console.log("login get http")
        res.send("<html><body><h1>hi there im here</h1> this page is for creating new account </body></html>")
    }
)
router.post( 
    '/new-account', (req, res) =>{
        const formData = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        };
        const UserModel = new UsersModel (formData)
        bcryptjs.genSalt(
            (err, salt) =>
            {
                bcryptjs.hash(
                    formData.password,salt,(err, EncryptedPassword)=> 
                    {
                        UserModel.password = EncryptedPassword;
                        UserModel.save()
                        .then
                        ( 
                            dbDocument => 
                            console.log("account is created successfully ")
                        )
                        .catch(
                            err =>
                            console.log(err)
                        )                 
                    } 
                )   
            }
        )
        
    }
)
router.get(
    '/login', (req,res) => {
        console.log("login get http")
        res.send("<html><body><h1>hi there im here</h1> this page is for logging in </body></html>")
    }
)
router.post( 
    '/login', (req, res) =>{
        const formData = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        };
        const UserModel = new UsersModel (formData)
        bcryptjs.genSalt(
            (err, salt) =>
            {
                bcryptjs.hash(
                    formData.password,salt,(err, EncryptedPassword)=> 
                    {
                        UserModel.password = EncryptedPassword;
                        UserModel.save()
                        .then
                        ( 
                            dbDocument => 
                            console.log("user is logged in successfully ")
                        )
                        .catch(
                            err =>
                            console.log(err)
                        )                 
                    } 
                )   
            }
        )
        
    }
)
module.exports = router
