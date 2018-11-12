const Joi = require('joi');

module.exports = {

  load: {
    params: {
      contactId: Joi.number().integer().min(1).required(),
    },
  },

  create: {
    body: {
      fullname: Joi.string().alphanum().min(3).max(100).required(),
      email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).description('Email is required').required(),
      phone: Joi.number().integer().min(10).required(),
      mobile: Joi.number().integer().min(10).required(),
      address:Joi.string().alphanum().min(3).max(100).required(),
    },
  },

  update: {
    body: {
      fullname: Joi.string().alphanum().min(3).max(100).required(),
      email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).description('Email is required').required(),
      phone: Joi.number().integer().min(10).max(11).required(),
      mobile: Joi.number().integer().min(10).max(11).required(),
      address:Joi.string().alphanum().min(3).max(100).required(),
    },
  },

};