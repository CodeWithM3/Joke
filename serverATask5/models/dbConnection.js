const mongoose = require('mongoose');
require('dotenv').config()

const connectDb = async()=>{
   try {
       await mongoose.connect(process.env.URI)
       console.log('Mongoose Database is connected successfully')
   } catch (error) {
       console.error('Mongoose database connection unsuccessful.....')
   }

}
module.exports = connectDb