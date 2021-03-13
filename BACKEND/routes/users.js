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
                                res.send("<h1>account created</h1>")
                        )
                        .catch(
                            err =>
                            res.send(err)
                            
                        )                 
                    } 
                )   
            }
        )
        
    }
)
router.get(
    '/login', (req,res) => {
        UsersModel.findOne({email:req.body.email})
        .then( UserFound =>
            {
                if(!UserFound)
                    res.send('no user with that email found')
                else{
                    bcryptjs.compare(req.body.password, UserFound.password, (err,compareResult) =>
                        {
                            if (compareResult)
                                res.send("the user is logged in successfully")
                            else
                                res.send("found but pass is wrong", err)
                        }
                    )
                }

            }

        )
        .catch((err)=> res.send("the user is not found"))
    }
)
module.exports = router
