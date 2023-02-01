const { ClientErrorResponse } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if (!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price)
    {
        return res.status(ClientErrorResponse.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err:'Missing mandatory properties to create a flight'
        })
    }
}

module.exports = {
    validateCreateFlight
}