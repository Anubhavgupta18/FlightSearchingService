const { airportService } = require('../services/index');

const Airport = new airportService();

const create = async (req, res) => {
    try {
        const airport = await Airport.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Created airport successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err:error
        })
    }
}
const get = async (req, res) => {
    try {
        const airport = await Airport.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Fetched airport successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a airport',
            err:error
        })
    }
}
const destroy = async (req, res) => {
    try {
        const response = await Airport.deleteAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Deleted airport successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a airport',
            err:error
        })
    }
}
const update = async (req, res) => {
    try {
        const airport = await Airport.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Updated airport successfully',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a airport',
            err:error
        })
    }
}
module.exports = {
    create,
    get,
    destroy,
    update
}