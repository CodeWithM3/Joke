const Bull = require('bull')
const {transporter} = require('./emailConfig/emailTransport')
const emailProcess = new Bull('emailReceipt')
require('dotenv').config()

emailProcess.process( async(Job)=>{
    try {
         await transporter.sendMail({
            from: process.env.OWNER, 
            to: Job.data.customer.email, 
            subject: "EMAIL RECEIPT", 
            text: Job.data.customer.receipt,   
        })
    } catch (error) {
        console.log(error);
    }

})