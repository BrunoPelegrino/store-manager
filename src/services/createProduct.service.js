const { createProductModel, productsModel } = require('../models');
const { validateNewProduct } = require('./validations/createProduct.validation');

const addProduct = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return (error);
  const newProductId = await createProductModel.insert({ name });
  const newProduct = await productsModel.findById(newProductId);
  return { type: null, message: newProduct };
};

module.exports = {
  addProduct,
};