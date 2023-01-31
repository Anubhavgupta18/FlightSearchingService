const { Airport } = require('../models/index');

class airportRepository{
    async createAirport({ name, cityId }) {
        try {
            const airport = await Airport.create({ name, cityId });
            return airport;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async deleteAirport(airportId) {
        try {
            const reponse = await Airport.destroy({
                where: {
                    id:airportId
                }
            });
            return reponse;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async updateAirport(airportId, data) {
        try {
            // const airport = await Airport.create({ id: airportId });
            // airport.name = data.name;
            // airport.cityId = data.cityId;
            // await airport.save();
            // return airport;
            const airport = await Airport.update(data, {
                where: {
                    id: airportId
                }
            });
            return airport;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
}
module.exports = airportRepository;