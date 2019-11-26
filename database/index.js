let Sequelize = require('sequelize');
let fs = require('fs');
let {resolve} = require('path');

module.exports = (() => {
    let instance;
    function initInstance() {
        //create connection with db
        let sequelize = new Sequelize('hsn', 'root', 'root', {host: 'localhost', dialect: 'mysql'});
        const models = {};

        function getModels() {
            fs.readdir('./database/models', (err, files) => {
                files.forEach(file => {
                    let [modelName] = file.split('.'); // ['User', 'js']
                    models[modelName] = sequelize.import(`../database/models/${modelName}`);
                });
            });
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]

        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initInstance();
            }
            return instance;

        }

    }


})();
