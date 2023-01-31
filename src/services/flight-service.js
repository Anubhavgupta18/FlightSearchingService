const { flightRepository } = require('../repository/index');
const { airplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');
class flightService{
    constructor() {
        this.FlightRepository = new flightRepository();
        this.AirplaneRepository = new airplaneRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime,data.departureTime)) {
                throw { error: 'departure time is greater than arrival time' }
            }
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
}

module.exports = flightService;
/*
*{
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    departureDateTime,
    arrivalDateTime,
    price,
    totalSeats -> airplane
 }
**/