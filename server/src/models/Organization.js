const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationSchema = new Schema({
  name: String,
  description: String,
  password: String,
  events: {
    _id: Schema.Types.ObjectId,
    title: String,
    organization: String,
    description: String,
    date: Date,
    schedule: String,
  },
})


module.exports = mongoose.model('Organization', organizationSchema, 'orgs')
