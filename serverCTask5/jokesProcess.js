const Bull = require('bull')
require('dotenv').config()
const JokesProcess = new Bull('Jokes')
const {Client, Intents} = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })


JokesProcess.process(async(job)=>{
    const Joke = job.data.joke
try {
client.on('ready', async()=>{
    console.log('user is logged in')
    await client.channels.cache.get(process.env.DM_CHANNEL).send(Joke)
  
})

} catch (error) {
    console.log(error.message)
}
client.login(process.env.DISCORD_CHUCKNORRIS_JOKE_BOT)
})








module.exports = JokesProcess