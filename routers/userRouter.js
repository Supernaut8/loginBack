const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController')
const validator = require('../config/validator')

const {SignUp, SignIn, SignOut, verifyMail, verifyTokenSession} = userController
const passport = require('../config/passport')

userRouter.route('/users/auth/signUp')
.post(validator,SignUp) 

userRouter.route('/users/auth/signIn')
.post(SignIn) 


userRouter.route('/users/auth/verifyEmail/:string')
.get(verifyMail)

userRouter.route('/users/auth/verifyTokenSession')
.get(passport.authenticate('jwt', { session: false }),verifyTokenSession)

// userRouter.route('/users/auth/verifyTokenSession')
// .get(verifyTokenSession)

module.exports = userRouter
  

 
