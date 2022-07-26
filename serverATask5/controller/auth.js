const User = require('../models/userSchema.js')
const verifyToken = async(req, res,next)=>{

    const bearerHeader = req.headers.authorization
    const validate = await User.findOne({UserID: bearerHeader})
    if(!bearerHeader) return res.status(404).send({message: ' Provide a valid ID'})
    if(!validate) return res.status(404).send({message: 'you have enter an incorrect UserID'})

    req.user = validate
    next()
}

module.exports = verifyToken