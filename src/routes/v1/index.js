const express = require('express')
const router = express.Router();

const cityController = require('../../controllers/city-controller');
const airportController = require('../../controllers/airport-controller');

router.post('/city', cityController.create);
router.get('/city/:id', cityController.get);
router.delete('/city/:id', cityController.destroy);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

router.post('/airport', airportController.create);
router.get('/airport/:id', airportController.get);
router.patch('/airport/:id', airportController.update);
router.delete('/airport/:id', airportController.destroy);

module.exports = router;