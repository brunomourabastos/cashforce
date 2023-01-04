const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
let initModels = require('../../src/database/models/init-models')
const { ordersMock } = require('./mock/ordersMock.js');
const { sequelize } = require('../database/models/index')

let models = initModels(sequelize)
chai.use(chaiHttp);

describe('Testar rota /orders', () => {

  beforeEach(() => {
    sinon.stub(models.orders, 'findAll').resolves(ordersMock);
  });
  afterEach(() => {
    sinon.restore();
  });
  
  it ( 'Deve retornar status 200 ao buscar todas as offers', async () => {
    const res = await chai.request('http://localhost:3001').get('/orders').send()
    chai.expect(res.status).to.be.equal(200)
  })

  })