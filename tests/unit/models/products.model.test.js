const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const { products, productsDb } = require('./mocks/products.mocks');
const { productsModel } = require('../../../src/models');

describe('Products Model', function () {
  it('Lista todos os produtos cadastrados no banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([productsDb]);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(products);
  });
    it('Lista os produtos cadastrados no banco de dados pelo ID', async function () {
    sinon.stub(connection, 'execute').resolves([[productsDb[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
  afterEach(sinon.restore);
});