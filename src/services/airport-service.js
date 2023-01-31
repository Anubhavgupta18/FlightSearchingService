const { airportRepository } = require('../repository/index');

class airportService{
    constructor() {
        this.AirportService = new airportRepository();
    }
    async createAirport({ name, cityId }) {
        try {
            const airport = await this.AirportService.createAirport({ name, cityId });
            return airport;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async deleteAirport(airportId) {
        try {
            const response = await this.AirportService.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async getAirport(airportId) {
        try {
            const airport = await this.AirportService.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async updateAirport(airportId,{ name, cityId }) {
        try {
            const airport = await this.AirportService.updateAirport(airportId,{ name, cityId });
            return airport;
        } catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
}

module.exports = airportService;