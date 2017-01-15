'use strict'
module.exports = function(sequelize, DataTypes) {
        return sequelize.define('Diet', {
                                diet_id: {
                                                type: DataTypes.INTEGER(8),
                                              //  allowNull: false,
                                                primaryKey: true,
                                                autoIncrement: true
                                },
                                title: {
                                                type: DataTypes.STRING,
                                                allowNull: false
                                },
                                author: {
                                                type: DataTypes.STRING,
                                                allowNull: false
                                },
                                type: {
                                                type: DataTypes.STRING,
                                                allowNull: false
                                },
                                year: {
                                                type: DataTypes.INTEGER(4),
                                                allowNull: false
                                },
                                content: {
                                                type: DataTypes.TEXT,
                                                allowNull: false
                                }
                                
                }, {
                                tableName: 'diets',
                                timestamps: false
                });
             
};