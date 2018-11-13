const express = require('express');
const userRoutes = require('./server/routes/user');
const contactRoutes = require('./server/routes/contact');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);
router.get('*', (req, res) =>
  res.send('Welcome To Contact Api Chanllenge! Api Built By UCHENNA IHE @ urchihe@gmail.com')
);

// mount user routes at /users
router.use('api/user', userRoutes);
router.use('api/contact', contactRoutes);



module.exports = router;
