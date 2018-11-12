const express = require('express');
const validate = require('express-validation');
const paramValidation = require('./validation/contact');
const expressJwt = require('express-jwt');
const config = require('../../server/config/config');
const contactController = require('../controllers/contacts');


const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/contacts - Get list of contacts */
   .get(expressJwt({ secret: config.jwtSecret }), contactController.list)

  /** POST /api/contacts - Create new contact */
  .post(expressJwt({ secret: config.jwtSecret }), validate(paramValidation.create), contactController.create);

router.route('/:contactId')
  /** GET /api/contact/:contactId - Get contact */
  .get(expressJwt({ secret: config.jwtSecret }), validate(paramValidation.load), contactController.retrieve)

  /** PATCH /api/contacts/:contactId - Update contact */
  .patch(expressJwt({ secret: config.jwtSecret }), validate(paramValidation.update), contactController.update)

  /** DELETE /api/contacts/:contactId - Delete contact */
  .delete(expressJwt({ secret: config.jwtSecret }), validate(paramValidation.load), contactController.remove);

router.route('/:contactId/star')
  /** PATCH /api/star/:contactId - PATCH contact with star */
  .patch(expressJwt({ secret: config.jwtSecret }), validate(paramValidation.load), contactController.star)


module.exports = router;