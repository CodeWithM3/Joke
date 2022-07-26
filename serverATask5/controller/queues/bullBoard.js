const {createBullBoard} = require('@bull-board/api')
const {BullAdapter} = require('@bull-board/api/bullAdapter')
const {ExpressAdapter} = require('@bull-board/express')
const serverAdapter = new ExpressAdapter()

const {billTrackingQueue}= require('../queues/billTrackingQueue')
const {discordChuckNorrisJokesQueue} = require('../queues/discordJokesQueue')
const {emailQueue} = require('../queues/emailQueue')


createBullBoard({
    queues: [new BullAdapter(billTrackingQueue),
             new BullAdapter(discordChuckNorrisJokesQueue),
             new BullAdapter(emailQueue) ],
    serverAdapter
})

module.exports = {serverAdapter}