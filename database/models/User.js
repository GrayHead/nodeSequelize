module.exports = (sequelize, DataType) => {
    let User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
        },
        password: {
            type: DataType.STRING,
        }
    }, {tableName: 'user', timestamps: false});


    return User;
};
