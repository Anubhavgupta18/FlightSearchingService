const { flightService } = require('../services/index');

const FlightService = new flightService();

const create = async (req, res) => {
    try {
        const flight = await FlightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        });
    }
}
const getAll = async (req, res) => {
    try {
        const flights = await FlightService.getAllFlightsData(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            message: 'successfully fetched all flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await FlightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'successfully fetched a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a flight",
            err: error
        });
    }
}
const update = async (req, res) => {
    try {
        const reponse = await FlightService.updateFlight(req.params.id,req.body);
        return res.status(201).json({
            data: reponse,
            success: true,
            message: 'successfully updated a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a flight",
            err: error
        });
    }
}
module.exports = {
    create,
    get,
    getAll,
    update
}