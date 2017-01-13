var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var Sequelize = require("sequelize");
var models  = require('./models');


var sequelize = new Sequelize('mydb','luizas10','');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));
app.use('/admin', express.static('admin'));

var Menu = models.Menu;

var entities = require('./routes/entities.js');

 


// REST methods
app.use(require("./routes/menus.js"));
app.use(require("./routes/diets.js"));
app.use(require("./routes/resources.js"));

app.use(express.static('app'));

var sequelize = new Sequelize('mydb', 'luizas10', '', {
   dialect: 'mysql',
   port: 3306
});

entities.sequelize.sync().then(function() {
    app.listen(3306, function(err) {
        if (err) console.log(err);

        console.log('running server on port ' + 3306);
    })
   
});


app.listen(process.env.PORT);