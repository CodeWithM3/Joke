const Bull = require("bull")
const billTrackingProcess = new Bull("billTracking")
const redis= require('./redisConnection/redisDb')




billTrackingProcess.process(async(bill)=>{
    try {
        const uuid = bill.data.receipt.acct
        const amount = bill.data.receipt.amount
        await redis.incrby(uuid, amount)
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = billTrackingProcess