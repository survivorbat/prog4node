const express = require('express');
const routes = express.Router();

const mealcontroller = require('../controllers/ctrl_meal');

// routes.get('/', (req, res, next) => {
// 	res.contentType('application/json');
// 	next();
// });

routes.get('/', mealcontroller.getAll);

routes.get('/:id', mealcontroller.getById);

routes.post('/', mealcontroller.create);

routes.put('/', mealcontroller.update);

routes.delete('/', mealcontroller.delete);

module.exports = routes;
