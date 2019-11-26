module.exports = (sequelize, DataType) => {

    const Auth = sequelize.define('Auth', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataType.INTEGER,
            allowNull: false,
        },

        access_token: {
            type: DataType.STRING,
            allowNull: false,
        },

        refresh_token: {
            type: DataType.STRING,
            allowNull: false,
        },

    }, {tableName: 'auth', timestamps: false});
    return Auth;
};
