'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Auth extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate({ User }) {
        //     // define association here
        //     // userId
        //     this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
        // }

        toJSON() {
            return { ...this.get(), uuid: undefined, id:undefined, password: undefined}
        }
    }
    Auth.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            verified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'auths',
            modelName: 'Auth',
        }
    )
    return Auth
}