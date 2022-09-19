const { addProductSchema } = require('./schema');

const validateNewProduct = async (name) => {
  const { error } = addProductSchema.validate({ name });
  if (error) {
 return {
    type: 'INVALID_NAME',
    message: 'name length must be at least 3 characters long',
  }; 
} return { tyep: null, message: '' };
};

module.exports = {
  validateNewProduct,
};