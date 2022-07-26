const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const apiRoutes = require('./route/apiRoutes')
const serviceRoutes = require('./route/servicesRoute')
const {serverAdapter} = require('./controller/queues/bullBoard')
const connectDb = require('./models/dbConnection')
connectDb()


const PORT = process.env.PORT
app.use(express.json())
serverAdapter.setBasePath('/admin/queues')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/admin/queues', serverAdapter.getRouter())

app.use('/api', apiRoutes)
app.use('/paid', serviceRoutes)
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))