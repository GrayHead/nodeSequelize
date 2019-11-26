let router = require('express').Router();
let userController = require('../controllers/UserController');
router.get('/', userController.getUsers);
module.exports = router;
