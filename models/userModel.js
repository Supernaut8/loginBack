const mongoose = require('mongoose')
const planSchema = new mongoose.Schema({
    planName: {type:String},
    description: {type:String},
    coverage: [{type:String}],
    cost: {type:Number}
  });
mongoose.model('planes', planSchema)

const userSchema = new mongoose.Schema({
    fullName : {type:String, required:true},
    email : {type:String, required:true},
    password : [{type:String, required:true}],
    from : {type:Array},
    aplication : {type:String,require:true},
    uniqueString:{type:String, required:true},
    emailVerify:{type:Boolean, required:true},
   planesSuscrip:[{ type: mongoose.Types.ObjectId, ref: 'planes'}]
})

const User = mongoose.model('users', userSchema)

module.exports = User