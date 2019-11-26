let db = require('../database').getInstance();

class UserService {
    async getUsers() {
        let model = db.getModel('User');
        return await model.findAll();
    }

    async getSingleUser(userId) {
        let model = db.getModel('User');
        let findOne = await model.findOne({where: {id: userId}});

        return findOne && findOne.dataValues;

    }

}

module.exports = new UserService();
