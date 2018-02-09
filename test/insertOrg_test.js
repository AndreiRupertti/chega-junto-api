const insertOrg = require('../src/routes/insertOrg')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

const req = {
  body: {name: 'Tomas Jefferson'}
}
const res = {
  send: sinon.spy(),
}
const next = sinon.spy()

const model = {
  create: sinon.stub()
}

describe('insertOrg', () => {

  context('Ao entrar na rota', () => {
    it('chama create na model com req.body', () => {
      model.create.resolves(true)
      insertOrg(model)(req,res,next)
      expect(model.create).to.be.calledWith({name: 'Tomas Jefferson'})
    })
  })
  context('Com promise resolvida', () => {
    it('chama res.send com retorno da model', () => {
      expect(res.send).to.be.calledOnce
      expect(res.send).to.be.calledWith(true)
    })
  })
  context('Com promise rejeitada', () => {
    it('chama proxima rota com next', () => {
      model.create.rejects(new Error('MockedError 404 - Not Found'))
      insertOrg(model)(req,res,next)
      expect(next).to.be.not.calledOnce
    })
    it('nao deve chamar res.send', () => {
      res.send.resetHistory()
      model.create.rejects(new Error('MockedError 404 - Not Found'))
      insertOrg(model)(req,res,next)
      expect(res.send).to.not.be.called
    })
  })
})
