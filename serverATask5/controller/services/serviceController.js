const {Receipts} = require('../queues/billTrackingQueue')
const {JokesQueue} = require('../queues/discordJokesQueue')
const randomNames = require('./externalApis/randomnames')
const chuckNorris = require('./externalApis/chuckNorris')


const user_jokes = async(req, res)=>{
   try {
       
    const UUID = req.headers['x-api-uuid']
    const amountPerCall = 10
    const jokes = await chuckNorris()
    const bill = {acct: `${UUID}_billing_amount`, amount: amountPerCall}
    await Receipts(bill)
    await JokesQueue(jokes)
    return res.status(200).send({message: jokes})

   } catch (error) {
      res.status(400).send({message: error.message})
   }
}

const user_randomnames = async(req, res)=>{
try {
    const UUID = req.headers['x-api-uuid']
    const amountPerCall = 15
    const random_name = await randomNames()
    const bill = {acct: `${UUID}_billing_amount`, amount: amountPerCall}
    await Receipts(bill)
    return res.status(201).send({message: random_name})
} catch (error) {
   res.status(400).send({message: error.message})
}
}

module.exports = {user_jokes, user_randomnames}