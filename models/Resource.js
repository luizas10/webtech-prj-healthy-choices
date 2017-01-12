'use strict'
module.exports = function(sequelize, DataTypes) {

    var Resource = sequelize.define('Resource', {
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        url: {
            type: DataTypes.STRING,
            field: 'url'
        },
    }, {
        timestamps: false,
        tableName: 'resources',
         classMethods: {
             associate: function(models) {
                 Resource.belongsTo(models.Diet, {
                     onDelete: "CASCADE",
                 });
             }
         }

    });
    

    return Resource;
}