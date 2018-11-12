const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const paramValidation = require('./validation/user');
const authController = require('../controllers/auth');
const config = require('../../server/config/config');

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
  .post(validate(paramValidation.create), authController.login);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
 router.route('/signup')
  .post(validate(paramValidation.create), authController.login);

router.route('/random-number')
  .get(expressJwt({ secret: config.jwtSecret }), authController.getRandomNumber);

module.exports = router;