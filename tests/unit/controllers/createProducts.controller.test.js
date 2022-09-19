const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsController, createProductController } = require('../../../src/controllers');
const { productsService, createProductService } = require('../../../src/services');
const { products, newProduct } = require('./mocks/products.controller.mocks');

const { expect } = chai;
chai.use(sinonChai);


describe('testando o controller do Createproducts', function () {
  afterEach(sinon.restore);

  it('criando novo produto', async function () {
    const res = {};
    const req = { body: {name: 'add produto' }}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(createProductService, 'addProduct').resolves({ type: null, message: newProduct });

    await createProductController.newProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
});