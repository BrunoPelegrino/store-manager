const { updateProductModel } = require('../models');

const modifyProduct = async (id, name) => {
  const verifyRows = await updateProductModel.updateProduct(id, name);
  if (!verifyRows) return { type: 404, message: 'Product not found' };
  return { type: null, message: { id, name } };
};

module.exports = {
  modifyProduct,
};