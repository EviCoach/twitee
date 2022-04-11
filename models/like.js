'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Post }) {
            // define association here
            this.belongsTo(Post, {
                foreignKey: 'userId', as: 'like'
            });
        }

        toJSON() {
            return { ...this.get() }
        }
    }
    Like.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique:true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'likes',
            modelName: 'Like',
        }
    )
    return Like
}