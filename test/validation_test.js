const validation = require('../src/routes/validation')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

let req = {}
const res = {
  sendStatus: sinon.spy(),
  send: sinon.spy()
}

describe('Validation', () => {
  beforeEach(() => {
    req = {
      body: {
        name: 'Jose',
        email: 'jo@se.com',
        password: '123jose',
        confirmPassword: '123jose'
      }
    }
    res.sendStatus.resetHistory()
    res.send.resetHistory()
  })
  context('Com user perfeito', () => {
    it('Responde com 200 ', () => {
      validation()(req,res)
      expect(res.sendStatus).to.be.calledWith(200)
    })
  })
  context('Com campos não preenchidos', () => {
    it('Retorna mensagem para preencher campos ', () => {
      let reqWithoutName = req
      reqWithoutName.body.name = ''
      validation()(reqWithoutName,res)
      expect(res.send).to.be.calledOnce
      expect(res.send).to.be.calledWith({message: 'Preencha todos os campos!'})
    })
  })
  context('Com senha menor que 6 digitos', () => {
    it('Retorna mensagem de senha muito curta', () => {
      let reqWithShortPassword = req
      reqWithShortPassword.body.password = '12345'
      validation()(reqWithShortPassword,res)
      expect(res.send).to.be.calledOnce
      expect(res.send).to.be.calledWith({message: 'A senha deve ter pelo menos 6 digitos'})
    })
  })
  context('Com senha diferente da confirmação de senha', () => {
    it('Retorna mensagem de senhas diferentes', () => {
      let reqWithDifferentPassword = req
      reqWithDifferentPassword.body.password = 'jose321'
      validation()(reqWithDifferentPassword,res)
      expect(res.send).to.be.calledOnce
      expect(res.send).to.be.calledWith({message: 'Senhas diferentes'})
    })
  })
})
