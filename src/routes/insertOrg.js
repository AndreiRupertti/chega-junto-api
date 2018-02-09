module.exports = Model => (req, res, next) => {
  Model.create(req.body)
  .then(response => res.send(response))
  .catch(e => {
    console.log(e.message)
    next()
  })
}
