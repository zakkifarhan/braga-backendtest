const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    geometry: Joi.object().keys({
      coordinates: Joi.array().required(),
      type: Joi.string().required().valid('Point')
    }).required()
  }),
};

module.exports = {
  create,
};