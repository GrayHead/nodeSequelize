let router = require('express').Router();
let userController = require('../controllers/UserController');
router.get('/', userController.getUsers);
router.post('/', userController.save);

module.exports = router;
