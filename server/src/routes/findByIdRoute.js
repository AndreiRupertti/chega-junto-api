module.exports = (Model) => (req, res, next) => {
  Model.findOne({'events._id': req.params.id}, {'events.$': 1, _id: 0})
    .then(query => res.send({query: query.events}))
    .catch(e => {
      console.log(e.message)
      next()
    })
}
