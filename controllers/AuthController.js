let authService = require('../services/AuthService');
let tokenizer = require('../helpers/tokenizer');

class AuthController {

    async authUser(req, res) {
        let authenticateUser = await authService.authenticate(req.body.name, req.body.password);

        if (!authenticateUser) {
            throw new Error('user not found');
        }
        let tokens = tokenizer();
        // {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzQ3NzAxODB9.eIz212g6GpXwkMkMOMNK7ZdVltmug4ExZ_zyoRXqjo4", "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzQ3NzAxODB9.a14htpEHpl7VyuEmUY6hkpw3w3Q2cKxt1reLPHLfkVw"}

        authService.saveTokenToDatabase({user_id: authenticateUser.id, ...tokens});
        res.json(tokens);

    }
}


module.exports = new AuthController();
