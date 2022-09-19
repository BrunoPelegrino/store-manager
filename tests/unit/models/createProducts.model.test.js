const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const { products, createProductDb, insertProduct, productsDb } = require('./mocks/products.mocks');
const { productsModel, createProductModel } = require('../../../src/models');

describe('CreateProducts Model', function () {
  it('adiciona um produto ao banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await createProductModel.insert(insertProduct);
    expect(result).to.be.equal(4);
  });
  
  afterEach(sinon.restore);
});