const Bull = require('bull')



const discordChuckNorrisJokesQueue = new Bull('Jokes',{
    redis: process.env.REDIS
})



const JokesQueue = async(joke)=>{
    await discordChuckNorrisJokesQueue.add({joke})

}
module.exports = {JokesQueue, discordChuckNorrisJokesQueue}