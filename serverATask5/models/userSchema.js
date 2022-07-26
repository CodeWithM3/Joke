const mongoose = require('mongoose')
const {v4: uuid} = require('uuid')
const User = new mongoose.Schema({
   UserID:{
       type: String,
       id: true,
       index: true,
       default: uuid,
       unique: true
   },
   firstname:{
       type: String,
       required: true,
       
   },
   lastname: {
       type: String,
       required: true
   },
   email:{
       type: String,
       required: true,
       unique: true,
       lowercase: true
   }

})

User.methods.chargesForJokes = function(balance){
    const charge = balance - 10
    return charge
}

User.methods.chargesForRandomNames = function(balance){
    const charge = balance - 15
    return charge
}
module.exports = Registration = mongoose.model('user', User)