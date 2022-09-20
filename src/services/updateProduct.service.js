const { updateProductModel } = require('../models');

const modifyProduct = async (name, id) => {
  const verifyRows = await updateProductModel.updateProduct(name, id);
  if (!verifyRows) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null, message: { id, name } };
};

module.exports = {
  modifyProduct,
};