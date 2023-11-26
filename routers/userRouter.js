const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')
const validator = require('../config/validator')
const passport=require("../config/passport")
const {SignUp, SignIn, verifyMail,verifyTokenSession} = userController

userRouter.route('/users/auth/signUp')
.post(validator,SignUp) 

userRouter.route('/users/auth/signIn')
.post(SignIn) 


userRouter.route('/users/auth/verifyEmail/:string')
.get(verifyMail)

userRouter.route("/users/auth/verifyToken").get(passport.authenticate("jwt",{session:false}),verifyTokenSession)

module.exports = userRouter
  

 
