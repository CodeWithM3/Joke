const Bull = require('bull')
require('dotenv').config()

const emailQueue = new Bull('emailReceipt', {
    redis: process.env.REDIS,
    limiter:{
        max: 1,
        duration: 1000
    }
})

const emailQueueGmail = async(customer)=>{
    await emailQueue.add({customer}, {
        delay: 4000
    })
}

module.exports = {emailQueue, emailQueueGmail}