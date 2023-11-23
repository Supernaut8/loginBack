const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')
const validator = require('../config/validator')

const {SignUp, SignIn, verifyMail} = userController

userRouter.route('/users/auth/signUp')
.post(validator,SignUp) 

userRouter.route('/users/auth/signIn')
.post(SignIn) 


userRouter.route('/users/auth/verifyEmail/:string')
.get(verifyMail)



module.exports = userRouter
  

 
