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
  res.send("Welcome To Contact Api Challenge! Api Built By UCHENNA IHE urchihe@gmail.com" + '\r\n' +
  	"end points are" + '\r\n' + "1.	POST: /api/user/signup" + '\r\n' + "2.	POST: /api/user/signin" + '\n' + "3.	POST: /api/contact"
  	+ '\r\n' + "4.	GET: /api/contact" + '\r\n' + "5.	GET: /api/contact/<contact id>" + '\r\n' + "6.	PATCH: /api/contact/<contact id>"
  	+ '\r\n' + "7.	DELETE: /api/contact/<contact id>" + '\r\n' + "8.	PATCH: /api/contact/<contact id>/star" + '\r\n' + "Thanks!!!"
  	)
);

// mount user routes at /users
router.use('/api/user', userRoutes);
router.use('/api/contact', contactRoutes);



module.exports = router;
