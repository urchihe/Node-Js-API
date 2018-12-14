const Joi = require('joi');

module.exports = {

  load: {
    params: {
      userId: Joi.number().integer().min(1).required(),
    },
  },

  create: {
    body: {
      username: Joi.string().alphanum().min(3).max(30).description('Username is required').required(),
                  
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).description('Password is required').required(),
                 
      email: Joi.string().email({ minDomainAtoms: 2 }).description('Email is required').required(),
    },
  },
  login: {
    body: {
      username: Joi.string().alphanum().min(3).max(30).description('Username is required').required(),
                  
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).description('Password is required').required(),
    },
  },


  update: {
    body: {
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).description('Email is required').required()
    },
  },

};