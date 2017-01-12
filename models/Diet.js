'use strict'
module.exports = function(sequelize, DataTypes) {

    var Diet = sequelize.define('Diet', {
        diet_id: {
            type: DataTypes.INTEGER,
            field: 'diet_id',
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        author: {
            type: DataTypes.STRING,
            field: 'author'
        },
        type: {
            type: DataTypes.STRING,
            field: 'type'
        },
        year: {
            type: DataTypes.INTEGER,
            field: 'year'
        },
        content:{
            type :DataTypes.STRING,
            field: 'content'
        }
    }, 
    
    {
        timestamps: false,
        tableName: 'diets',
         classMethods: {
             associate: function(models) {

                 Diet.hasMany(models.Resource);
             }
         }
    });

    return Diet;
}