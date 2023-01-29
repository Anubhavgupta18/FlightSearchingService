const { cityRepository } = require('../repository/index');

class cityService{
    constructor() {
        this.CityRepository = new cityRepository();
    }
    async createCity(data)
    {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        }   
        catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async deleteCity(cityId)
    {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        }   
        catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async updateCity(cityId,data)
    {
        try {
            const city = await this.CityRepository.updateCity(cityId,data);
            return city;
        }   
        catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async getCity(cityId)
    {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        }   
        catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
    async getAllCities() {
        try {
            const cities = await this.CityRepository.getAllCities();
            return cities;
        }   
        catch (error) {
            console.log('something went wrong in the service layer');
            throw { error };
        }
    }
}

module.exports = cityService;
