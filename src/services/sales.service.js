const { saleModel, productsModel } = require('../models');

const createSale = async (productId, quantity) => {
  const newSaleId = await saleModel.insertSale();
  const newSale = await saleModel.insertSaleProducts({ productId, quantity });

  const findById = await Promise.all(newSale.map((id) => productsModel.findById(id)));
  
  if (!findById) return { type: 404, message: 'Product not foud' };

  return { type: null, message: { id: newSaleId, ItemsSold: newSale } };
};

module.exports = {
  createSale,
};