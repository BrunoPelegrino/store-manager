const { updateProductService } = require('../services');

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await updateProductService.modifyProduct({ id, name });

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = {
  updateById,
};