const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const Org = require('./models/Organization')

const app = express()

const MONGO_URL = 'mongodb://localhost:27017/chega-junto'

app.set('MONGO_URL', process.env.MONGO_URL || MONGO_URL)

mongoose.connect(app.get('MONGO_URL'))

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(`Everything seems to be working!`)
})

app.get('/findOrgs', routes.findOrgs)

app.post('/findEventById/:id', routes.findEventById)

app.post('/insertItem', (req, res) => {

})

app.listen(app.get('port'), () =>
  console.log(`Node app is running on port ${app.get('port')}`))
