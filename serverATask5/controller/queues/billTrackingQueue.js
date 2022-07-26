const Bull = require('bull')

const billTrackingQueue = new Bull('billTracking', {
    redis: process.env.REDIS, limiter:{
        max: 1,
        duration: 1000
    }
})

const Receipts = async(receipt)=>{
    await billTrackingQueue.add({receipt}, {
        delay: 4000
    })

}
module.exports = {Receipts, billTrackingQueue}