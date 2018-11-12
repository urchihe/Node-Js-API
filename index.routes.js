const express = require('express');
const userRoutes = require('./server/routes/user');
const contactRoutes = require('./server/routes/contact');
const authRoutes = require('./server/routes/auth');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/user', userRoutes);
router.use('/contact', contactRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

module.exports = router;