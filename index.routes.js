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
  res.send("Welcome To Contact Api Challenge! Api Built By UCHENNA IHE urchihe@gmail.com" + '\n' +
  	"end points are" + '\n' + "1.	POST: /api/user/signup" + '\n' + "2.	POST: /api/user/signin" + '\n' + "3.	POST: /api/contact"
  	+ '\n' + "4.	GET: /api/contact" + '\n' + "5.	GET: /api/contact/<contact id>" + '\n' + "6.	PATCH: /api/contact/<contact id>"
  	+ '\n' + "7.	DELETE: /api/contact/<contact id>" + '\n' + "8.	PATCH: /api/contact/<contact id>/star" + '\n' + "Thanks!!!"
  	)
);

// mount user routes at /users
router.use('api/user', userRoutes);
router.use('api/contact', contactRoutes);



module.exports = router;
