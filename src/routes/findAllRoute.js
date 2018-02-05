module.exports = Model => (req, res, next) => {
  Model.find()
    .then(query => res.send({query}))
    .catch(e => {
      console.log(e.message)
      next()
    })
}
