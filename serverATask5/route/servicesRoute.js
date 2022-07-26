const express = require('express')
// const verifyToken = require('../controller/auth')
const serviceController = require('../controller/services/serviceController')

const router = express()


router.get('/jokes/10USD',serviceController.user_jokes)

router.get('/random_name/15USD',serviceController.user_randomnames)


module.exports = router