'use strict'
module.exports = function(sequelize, DataTypes) {

    var Menu = sequelize.define('Menu', {
        menu_id: {
            type: DataTypes.INTEGER,
            field: 'menu_id',
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        mic_dejun: {
            type: DataTypes.STRING,
            field: 'mic_dejun'
        },
        gustare1: {
            type: DataTypes.STRING,
            field: 'gustare1'
        },
        pranz: {
            type: DataTypes.INTEGER,
            field: 'pranz'
        },
        gustare2: {
            type: DataTypes.INTEGER,
            field: 'gustare2'
        },
        cina: {
            type: DataTypes.STRING,
            field: 'cina'
        },
        data_meniu: {
            type: DataTypes.STRING,
            field: 'data_meniu'
        },
        calorii: {
            type: DataTypes.INTEGER,
            field: 'calorii'
        }
    }, {
        timestamps: false,
        tableName: 'menu',
        
    });

    return Menu;
}
