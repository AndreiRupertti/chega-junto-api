const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/chega-junto')

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(cors())

app.get('/findOrgs', routes.findOrgs)

app.post('/findEventById/:id', routes.findEventById)

app.post('/insertItem', (req, res) => {

})

app.listen(app.get('port'), () =>
  console.log(`Node app is running on port ${app.get('port')}`))
