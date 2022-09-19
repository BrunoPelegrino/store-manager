const { createProductService } = require('../services');
const { errorMap } = require('../utils/errorMap');

const newProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await createProductService.addProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

module.exports = {
  newProduct,
};