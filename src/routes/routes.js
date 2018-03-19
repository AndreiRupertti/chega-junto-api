const findAllRoute = require('./findAllRoute')
const findByIdRoute = require('./findByIdRoute')
const insertOrg = require('./insertOrg')
const insertUser = require('./insertUser')
const validation = require('./validation')
const Organization = require('../models/Organization')
const Person = require('../models/Person')

const allRoutes = {
  findOrgs: findAllRoute(Organization),
  findEventById: findByIdRoute(Organization),
  insertOrg: insertOrg(Organization),
  insertUser: insertUser(Person),
  validation: validation()
}

module.exports = allRoutes
