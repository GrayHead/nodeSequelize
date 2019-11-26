let router = require('express').Router();

let authController = require('../controllers/AuthController');
router.post('/', authController.authUser);

module.exports = router;
