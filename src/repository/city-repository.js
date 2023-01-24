const { City } = require('../models/index');

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name:name });
            return city;
        }
        catch (error) {
            throw { error };
        }
    }
    async deleteCity({ cityId }) {
        try {
            await City.destroy({ 
                where: {
                    id:cityId
                }
            });
        }
        catch (error) {
            throw { error };
        }
    }
}

module.exports = cityRepository;