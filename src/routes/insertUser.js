module.exports = Model => (req, res, next) => {
  Model.create(req.body)
  .then(response => res.sendStatus(200))
  .catch(e => {
    console.log(e.message)
    next()
  })
}
