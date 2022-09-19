const sinon = require('sinon');
const { expect } = require('chai');

const { products, productsDb } = require('./mocks/products.service.mock');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

describe('Products service', function () {
  it('testa função findAllProducts', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(productsDb);
    const result = await productsService.getProducts();
    expect(result.type).to.equal(null)
    expect(result.message).to.be.deep.equal(products);
  });
    it('testa a função getProductsById', async function () {
    sinon.stub(productsModel, 'findById').resolves(productsDb[0]);
    const result = await productsService.getProductsById(1);
    expect(result.type).to.equal(null)
    expect(result.message).to.be.deep.equal(products[0]);
    });
      it('testa a função findById retorna um erro caso Id nao seja encontrado', async function () {
    sinon.stub(productsModel, 'findById').resolves(null);
        const result = await productsService.getProductsById(5);
        expect(result.type).to.equal(404)
        expect(result.message).to.be.equal('Product not found');
  });
  afterEach(sinon.restore);
});