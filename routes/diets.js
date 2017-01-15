var models = require('../models');
var express = require('express');
var router = express.Router();

var Diet = models.Diet;

router.post('/diets', function(request, response) {
    Diet.create(request.body).then(function() {
        response.status(201).send;
    }).catch(function(err) {
        console.warn(err);
    })
});

router.get('/diets', function(request, response) {

    Diet.findAll().then(function(diets) {
        response.status(200).send(diets);
    });
});

// returns one diet by diet_id
router.get('/diets/:diet_id', function(request, response) {
    Diet.findById(request.params.diet_id).then(function(diet) {
        if (diet) {
            response.status(200).send(diet);
        }
        else {
            response.status(404).send();
        }
    });
});

// router.get('/resourcesByDietController/:diet_id', function(request, response) {
//      Diet.findAll({
//         where:{
//            
//         }
//     }).then(function(diets) {
//         response.status(200).send(diets);
//     });
    
    
    
    
//     var diet = Diet.findById(request.params.diet_id);
//     vdiet.getResouceForDiet(diet);
//     // diet.ge
//     // Diet.findResourcesForDiet(diet).then(function(resources) {
//     //     if (diet) {
//     //         response.status(200).send(resources);
//     //     }
//     //     else {
//     //         response.status(404).send();
//     //     }
//     // });
// });



module.exports = router;
