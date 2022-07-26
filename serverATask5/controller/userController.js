const userRegistration = require('../models/userSchema')
const {emailQueueGmail} = require('./queues/emailQueue')
const redis = require('../models/redisDb')




const user_registration = async(req, res)=>{
    try {
        const {firstname, lastname, email} = req.body
        const users = new userRegistration({
            firstname : firstname,
            lastname: lastname,
            email: email
         
        })
        await users.save()
        
        res.status(200).send({message: `user is registered successfully`,uuid: users.UserID , success: true} )
    } catch (error) {
        console.log('An error occurred with registering user', error)
    }
}


const get_bill = async(req, res)=>{ 
    try {
    const uuid= req.params.uuid
    const TotalBill = await redis.get(`${uuid}_billing_amount`)
    const client = await userRegistration.findOne({UserID:uuid})
    const clientEmail = client.email
    const Receipt = {receipt: `your bill is ${TotalBill} USD`, email: clientEmail}
    await emailQueueGmail(Receipt)
    return res.status(200).send({message: 'Kindly check your email for receipt'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {user_registration, get_bill}