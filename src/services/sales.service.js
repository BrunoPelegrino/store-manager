const { saleModel, productsModel } = require('../models');

const createSale = async (sales) => {
  const findId = await Promise.all(
    sales.map(({ productId }) => productsModel.findById(productId)),
  );

  if (findId.some((id) => id === undefined)) {
    return { type: 404, message: 'Product not found' };
  }
};

const insert = async (sales) => {
  const newSale = await createSale(sales);
  if (newSale) return newSale;
 
  const newSaleId = await saleModel.insertSale();
  await saleModel.insertSaleProducts(sales, newSaleId);

  return { type: null, message: { id: newSaleId, itemsSold: sales } };
};

module.exports = {
  insert,
};