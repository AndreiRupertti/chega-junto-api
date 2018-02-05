module.exports = (model) => {
  this.model = model
  return {
    findAll: () => this.model.find().exec(),
    findEvents: () => this.model.find({}, {'events': 1})
  }
}
