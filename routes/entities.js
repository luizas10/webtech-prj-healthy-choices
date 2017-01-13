var Sequelize = require('sequelize');
var sequelize = new Sequelize('mydb','luizas10','');

var entities = {};
entities.Diet = sequelize.import('../models/Diet.js');
entities.Resource = sequelize.import('../models/Resource.js');

entities.sequelize = sequelize;
entities.Sequelize = Sequelize;
 
module.exports = entities;