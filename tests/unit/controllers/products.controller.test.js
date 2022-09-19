const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const { products } = require('./mocks/products.controller.mocks');

const { expect } = chai;
chai.use(sinonChai);


describe('testando o controller do products', function () {
  afterEach(sinon.restore);

  it('Testando a função products', async function () {
    const res = {};
    const req = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProducts').resolves({ type: null, message: products });

    await productsController.products(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Testando a função productsById', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductsById').resolves({ type: null, message: products[0] });

    await productsController.productsById(req, res);

     expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith(products[0]);
  });
    it('Testando a função productsById em caso de id nao encontrao', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductsById').resolves({ type: 404, message: 'Product not found' });

    await productsController.productsById(req, res);

     expect(res.status).to.have.been.calledWith(404);

    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});