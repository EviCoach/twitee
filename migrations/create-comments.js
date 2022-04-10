'use strict'
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('comments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            commentId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            postId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        })
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('comments')
    },
}