const { City } = require('../models/index');

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            });
            return city;
        }
        catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async getCity(cityId)
    {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) { 
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
    async updateCity(cityId,data)
    {
        try {
            // this methody to update a city does not return a city object
            // const city = await City.update(data, {
            //     where: {
            //         id:cityId
            //     }
            // });

            // This method will return city object also
            const city = await City.create({ id: cityId });
            city.name = data.name;
            await city.save();
            return city;
        }
        catch (error) {
            console.log('something went wrong in the repository layer');
            throw { error };
        }
    }
}

module.exports = cityRepository;