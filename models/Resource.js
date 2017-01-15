'use strict'

module.exports = function(sequelize, DataTypes) {
                return sequelize.define('Resource', {
                                resource_id: {
                                                type: DataTypes.INTEGER(8),
                                                allowNull: false,
                                                primaryKey: true,
                                                autoIncrement: true
                                },
                                diet_id: {
                                                type: DataTypes.INTEGER(8),
                                                allowNull: false,
                                                references: {
                                                                model: 'Diet',
                                                                key: 'diet_id'
                                                }
                                },
                                title: {
                                                type: DataTypes.STRING,
                                                allowNull: true
                                },
                                description: {
                                                type: DataTypes.STRING,
                                                allowNull: true
                                },
                                url: {
                                                type: DataTypes.TEXT,
                                                allowNull: true
                                }
                }, {
                                tableName: 'resources',
                                 timestamps: false
                });
                
};
 