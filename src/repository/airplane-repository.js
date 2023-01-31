const { airplane } = require('../models/index');

class airplaneRepository{
    async getAirplane(airplaneId) {
        try {
            const Airplane = await airplane.findByPk(airplaneId);
            return Airplane;
        } catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
}

module.exports = airplaneRepository;