const { flight } = require('../models/index');
const { Op } = require('sequelize');
class flightRepository{
    #createFilter(data)
    {
        var filter = {}
        if (data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirportId;
        }
        var pricefilter = []
        if (data.minPrice)
        {
            pricefilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice)
        {
            pricefilter.push({price:{ [Op.lte]: data.maxPrice }});
        }
        Object.assign(filter, { [Op.and]: pricefilter })
        console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            const Flight = await flight.create(data);
            return Flight;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async getFlight(flightId) {
        try {
            const Flight = await flight.findByPk(flightId);
            return Flight;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await flight.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async updateFlight(flightId, data) {
        try {
            const response = flight.update(data, {
                where: {
                    id: flightId
                }
            });
            return response;
        } catch (error) {
            console.log('something went wrong in the update flight process');
            throw { error };
        }
    }
}

module.exports = flightRepository;