const validation = () => (req, res) => {
  const user = req.body
  if (user.name === '' || user.email === '' || user.password === '') {
    res.send({message: 'Preencha todos os campos!'})
  } else if (user.password.length < 6) {
    res.send({message: 'A senha deve ter pelo menos 6 digitos'})
  } else if (user.confirmPassword != user.password) {
    res.send({message: 'Senhas diferentes'})
  } else {
    res.sendStatus(200)
  }
}

module.exports = validation
