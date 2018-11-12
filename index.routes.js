const express = require('express');
const userRoutes = require('./server/routes/user');
const contactRoutes = require('./server/routes/contact');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/user', userRoutes);
router.use('/contact', contactRoutes);

<<<<<<< HEAD

=======
>>>>>>> af53d3adc1c2a945c5b22e59e47c03885399a455


module.exports = router;
