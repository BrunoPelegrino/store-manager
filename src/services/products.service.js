const { productsModel } = require('../models');

const getProducts = async () => {
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const getProductsById = async (productId) => {
  const result = await productsModel.findById(productId);
    if (!result) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
};