let userService = require('../services/UserService');
let jwtVerify = require('../helpers/jwtVerify');
let authService = require('../services/AuthService');

class UserController {

    save(req, res) {

        userService.save(req.body.name, req.body.password);



    }

    async getUsers(req, res) {
        let authorizationToken = req.get('Authorization');

        if (!authorizationToken) {
            throw new Error('token is empty');
        }

        jwtVerify(authorizationToken);

        let authObject = await authService.findUserByToken(authorizationToken);
        let userId = authObject.user_id;

        let singleUser = userService.getSingleUser(userId);
        if (singleUser) {
            let allUsers = await userService.getUsers();
            res.json(allUsers);
        } else {
            res.json('error');

        }


    }

}


module.exports = new UserController();
