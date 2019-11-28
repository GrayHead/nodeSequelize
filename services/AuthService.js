let instance = require('../database').getInstance();


class AuthService {

    async authenticate(name, password) {
        let model = instance.getModel('User');
        let findOne = await model.findOne({where: {name, password}});
        return findOne && findOne.dataValues;
    }

    saveTokenToDatabase(object) {
        console.log(object);
        let model = instance.getModel('Auth');
        model.create(object);

    }

    async findUserByToken(authorizationToken) {

        let model = instance.getModel('Auth');
        let authObject = await model.findOne({where: {access_token: authorizationToken}});

        return authObject && authObject.dataValues;
    }


}

module.exports = new AuthService();



