const Joi = require('joi');

module.exports = {

  load: {
    params: {
      contactId: Joi.number().integer().min(1).required(),
    },
  },

  create: {
    body: {
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    },
  },

  update: {
    body: {
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    },
  },

};