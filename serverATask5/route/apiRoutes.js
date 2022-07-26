const express = require('express')
const userController = require('../controller/userController')



const router = express.Router()

router.post('/register', userController.user_registration)

router.get('/bill/:uuid', userController.get_bill)

module.exports = router