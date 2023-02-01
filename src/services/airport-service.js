const { airportRepository } = require('../repository/index');
const  crudService  = require('./crud-service');
class airportService extends crudService{
    constructor() {
        const AirportRepository = new airportRepository();
        super(AirportRepository);
    }

}

module.exports = airportService;