const { productsModel } = require('../models');

const getProducts = async () => {
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const getProductsById = async (id) => {
  const result = await productsModel.findById(id);
    if (!result) return { type: 404, message: 'Product not found' };
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
};