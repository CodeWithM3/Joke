const axios = require('axios')

const chuckNorris = async(result) =>{
    try {
      const JokesUrl = await axios.get('https://api.chucknorris.io/jokes/random')
       return result = JokesUrl.data.value
      

    } catch (error) {
        console.log(error)
    }
}
module.exports = chuckNorris