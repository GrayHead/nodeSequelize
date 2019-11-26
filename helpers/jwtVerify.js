let jwt = require('jsonwebtoken');
let {jwt_secrete} = require('../constants/config');

module.exports = (token) => {


    jwt.verify(token, jwt_secrete, (error) => {
        if (error) {
            throw new Error(error.message);
        }
    })
};
