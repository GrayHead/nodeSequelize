let db = require('../database').getInstance();
let mailer = require('../helpers/mailer');

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

    async save(name, password) {
        let model = db.getModel('User');
        model.create({name, password});
        await mailer(name);
    }


}

module.exports = new UserService();
