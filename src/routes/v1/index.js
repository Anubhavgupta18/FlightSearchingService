const express = require('express')

const cityController = require('../../controllers/city-controller');
const airportController = require('../../controllers/airport-controller');
const flightController = require('../../controllers/flight-controller');
const flightMiddleware = require('../../middlewares/flight-middlewares');
const router = express.Router();

router.post('/city', cityController.create);
router.get('/city/:id', cityController.get);
router.delete('/city/:id', cityController.destroy);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

router.post('/airport', airportController.create);
router.get('/airport/:id', airportController.get);
router.patch('/airport/:id', airportController.update);
router.delete('/airport/:id', airportController.destroy);

router.post('/flights',flightMiddleware.validateCreateFlight, flightController.create);
router.get('/flights', flightController.getAll);
router.get('/flights/:id', flightController.get);
router.patch('/flights/:id', flightController.update);

module.exports = router;