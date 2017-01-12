var models = require('../models');
var express = require('express');
var router = express.Router();

var Resource = models.Resource;

router.post('/resources', function(request, response) {
    Resource.create(request.body).then(function() {
        response.status(201).send;
    }).catch(function(err) {
        console.warn(err);
    })
});

router.get('/resources', function(request, response) {

    Resource.findAll().then(function(resources) {
        response.status(200).send(resources);
    });
});


module.exports = router;
