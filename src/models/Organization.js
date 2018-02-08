const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationSchema = new Schema({
  name: String,
  email: String,
  description: String,
  password: String,
  events: {
    _id: Schema.Types.ObjectId,
    title: String,
    organization: String,
    adress:  String,
    description: String,
    date: Date,
    schedule: String,
    contact: String,
  },
})


module.exports = mongoose.model('Organization', organizationSchema, 'orgs')
