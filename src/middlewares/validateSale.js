const validateId = (req, res, next) => {
  const { body } = req;

  const getIds = body.every(({ productId }) => productId);
  if (!getIds) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validateQauntity = (req, res, next) => {
  const { body } = req;

  // const getIQuantity = body.every(({ quantity }) => quantity);
  const getIQuantity = body.every(({ quantity }) => quantity !== undefined && quantity !== null);
  if (!getIQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const value = body.every(({ quantity }) => quantity > 0);
  if (!value) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  validateId,
  validateQauntity,
};