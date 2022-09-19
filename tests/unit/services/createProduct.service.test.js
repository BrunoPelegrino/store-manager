const sinon = require('sinon');
const { expect } = require('chai');

const { insertProduct, newProduct } = require('./mocks/products.service.mock');
const { productsModel, createProductModel } = require('../../../src/models');
const { createProductService } = require('../../../src/services');

const invalidName = 'd'

describe('createProducts service', function () {
  it('testa função addProduct', async function () {
    sinon.stub(createProductModel, 'insert').resolves(30);
    sinon.stub(productsModel, 'findById').resolves(newProduct)
    const result = await createProductService.addProduct(insertProduct);
     expect(result.type).to.equal(null);
  });
  it('testa função addProduct em caso de falha', async function () {
    const result = await createProductService.addProduct(invalidName);

    expect(result.type).to.be.equal('INVALID_NAME');
    expect(result.message).to.equal('name length must be at least 3 characters long')
  });
  afterEach(sinon.restore);
});