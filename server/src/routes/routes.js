const findAllRoute = require('./findAllRoute')
const findByIdRoute = require('./findByIdRoute')
const Organization = require('../models/Organization')

const allRoutes = {
  findOrgs: findAllRoute(Organization),
  findEventById: findByIdRoute(Organization)
}

module.exports = allRoutes
