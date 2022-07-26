const axios = require('axios')
const randomNames = async()=>{
    try {
      const NameUrl = await axios.get(`https://randomuser.me/api/`)
     return NameUrl.data.results

    } catch (error) {
        console.log(error)
    }
    
}
module.exports = randomNames