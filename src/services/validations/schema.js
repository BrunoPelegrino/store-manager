const Joi = require('joi');

// cconst idSchema = Joi.number().integer().min(1).required();
const pointSchema = Joi.string().min(3).required();

const addProductSchema = Joi.object({
  name: pointSchema,
});

module.exports = {
  addProductSchema,
};