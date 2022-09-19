const { addProductSchema } = require('./schema');

const validateNewProduct = (name) => {
  const { error } = addProductSchema.validate({ name });
  if (error) {
 return {
    type: 'INVALID_NAME',
    message: 'name length must be at least 3 characters long',
  }; 
} return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};