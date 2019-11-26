let jwt = require('jsonwebtoken');
let {jwt_secrete, jwt_refresh} = require('../constants/config');
module.exports = () => {

    let access_token = jwt.sign({}, jwt_secrete, {expiresIn: '24h'});
    let refresh_token = jwt.sign({}, jwt_refresh, {expiresIn: '48h'});

    return {access_token, refresh_token}

};
