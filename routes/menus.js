var models = require('../models');
var express = require('express');
var router = express.Router();

var Menu = models.Menu;

router.post('/menus', function(request, response) {
    Menu.create(request.body).then(function() {
        response.status(201).send;
    }).catch(function(err) {
        console.warn(err);
    })
});

router.get('/menus', function(request, response) {

    Menu.findAll().then(function(menus) {
        response.status(200).send(menus);
    });
});

// returns one menu by menu_id
router.get('/menus/:menu_id', function(request, response) {
    Menu.findById(request.params.menu_id).then(function(menu) {
        if (menu) {
            response.status(200).send(menu);
        }
        else {
            response.status(404).send();
        }
    });
});


router.put('/menus/:menu_id', function(request, response) {
    Menu
        .findById(request.params.menu_id)
        .then(function(menu) {
            if (menu) {
                menu
                    .updateAttributes(request.body)
                    .then(function() {
                        response.status(202).send('updated');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            }
            else {
                response.status(404).send();
            }
        });
});


router.delete('/menus/:menu_id', function(req, res) {
    Menu
        .findById(req.params.menu_id)
        .then(function(menu) {
            if (menu) {
                menu
                    .destroy()
                    .then(function() {
                        res.status(204).send();
                    })
                    .catch(function(error) {
                        console.warn(error);
                        res.status(400).send('server error');
                    });
            }
            else {
                res.status(404).send();
            }
        });
});

module.exports = router;
