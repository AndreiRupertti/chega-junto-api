const findAllRoute = require('../src/routes/findAllRoute');
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

const req = {}
const res = {
  send: sinon.spy()
}
const next = sinon.spy()

const model = {
  find: sinon.stub()
}

describe('findAllRoute', () => {

  context('Ao entrar na rota', () => {
    model.find.resolves({name: 'Um nome'})
    findAllRoute(model)(req,res,next)

    it('chama find na model', () => {
      expect(model.find).to.be.calledWithExactly()
    })
  })

  context('Com promise resolvida', () => {
    model.find.resolves({name: 'Um nome'})
    findAllRoute(model)(req,res,next)

    it('chama res.send com retorno da model', () => {
      expect(res.send).to.be.calledWithExactly({query: {name: 'Um nome'}})
    })
  })
  context('Com promise rejeitada', () => {

    it('chama proxima rota com next', () => {
      model.find.rejects(new Error('MockedError 404 - Not Found'))
      findAllRoute(model)(req,res,next)
      expect(next).to.be.not.calledOnce
    })
    it('nao deve chamar res.send', () => {
      res.send.resetHistory()
      model.find.rejects(new Error('MockedError 404 - Not Found'))
      findAllRoute(model)(req,res,next)
      expect(res.send).to.not.be.called
    })
  })
})
