const findByIdRoute = require('../src/routes/findByIdRoute')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const expect = chai.expect

const req = {
  params: {
    id: 12345
  }
}
const res = {
  send: sinon.spy()
}
const next = sinon.spy()

const model = {
  findOne: sinon.stub()
}

describe('findByIdRoute', () => {
  model.findOne.resolves({events: [{name:'Um evento'}]})
  findByIdRoute(model)(req,res,next)

  context('Ao entrar na rota', () => {
    it('chama findOne na model', () => {
      expect(model.findOne).to.be.calledWithExactly({'events._id': 12345}, {'events.$': 1, _id: 0})
    })
  })
  context('Com promise resolvida', () => {
    it('chama res.send com retorno da model', () => {
      expect(res.send).to.be.calledWithExactly({query: [{name:'Um evento'}]})
    })
  })
  context('Com promise rejeitada', () => {

    it('chama proxima rota com next', () => {
      model.findOne.rejects(new Error('MockedError 404 - Not Found'))
      findByIdRoute(model)(req,res,next)
      expect(next).to.be.not.calledOnce
    })
    it('nao deve chamar res.send', () => {
      res.send.resetHistory()
      model.findOne.rejects(new Error('MockedError 404 - Not Found'))
      findByIdRoute(model)(req,res,next)
      expect(res.send).to.not.be.called
    })
  })
})
