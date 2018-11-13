const Joi = require('joi');

module.exports = {

  load: {
    params: {
      contactId: Joi.number().integer().min(1).required(),
    },
  },

  create: {
    body: {
      fullname: Joi.string().min(3).max(100).required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).description('Email is required').required(),
      phone: Joi.number().integer().min(10).required(),
      mobile: Joi.number().integer().min(10).required(),
      address:Joi.string().alphanum().min(3).max(100).required(),
    },
  },

  update: {
    body: {
      fullname: Joi.string().min(3).max(100).required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).description('Email is required').required(),
      phone: Joi.number().integer().min(10).required(),
      mobile: Joi.number().integer().min(10).required(),
      address:Joi.string().alphanum().min(3).max(100).required(),
    },
  },

};