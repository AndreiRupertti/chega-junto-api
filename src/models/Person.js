const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
  name: String,
  email: String,
  password: String,
})

module.exports = mongoose.model('Person', personSchema, 'persons')
