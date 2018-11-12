const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const paramValidation = require('./validation/user');
const config = require('../../server/config/config');
const userController = require('../controllers/users');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/me')
  /** GET /api/user/signup - create new user */
  .get(expressJwt({ secret: config.jwtSecret }), userController.get);
router.route('/')
  /** GET /api/user/signup - create new user */
  .get(userController.list);
router.route('/signup')
  /** GET /api/user/signup - create new user */
  .post(validate(paramValidation.create), userController.create);

router.route('/signin')
  /** POST /api/user/sigin - Login  user */
  .post(validate(paramValidation.login), userController.login);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(validate(paramValidation.create), expressJwt({ secret: config.jwtSecret }),userController.get)

  /** PUT /api/users/:userId - Update user */
  .put(expressJwt({ secret: config.jwtSecret }),validate(paramValidation.create), userController.update)

/** Load user when API with userId route parameter is hit */
router.param('userId', userController.load);

module.exports = router;