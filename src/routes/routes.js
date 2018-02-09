const findAllRoute = require('./findAllRoute')
const findByIdRoute = require('./findByIdRoute')
const insertOrg = require('./insertOrg')
const Organization = require('../models/Organization')

const allRoutes = {
  findOrgs: findAllRoute(Organization),
  findEventById: findByIdRoute(Organization),
  insertOrg: insertOrg(Organization)
}

module.exports = allRoutes
