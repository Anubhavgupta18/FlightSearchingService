const { Airport } = require('../models/index');
const crudRepository = require('./crud-repository');

class airportRepository extends crudRepository{
    constructor() {
        super(Airport);
    }
}

module.exports = airportRepository;
