const { flight } = require('../models/index');

class flightRepository{
    async createFlight(data) {
        try {
            const Flight = await flight.create(data);
            return Flight;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
}

module.exports = flightRepository;