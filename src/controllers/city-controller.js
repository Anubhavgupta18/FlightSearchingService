const { cityService } = require('../services/index');

const City = new cityService();

//POST
//data-> req.body
const create = async (req, res) => {
    try {
        const city = City.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Created city successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Not able to create a city",
            err:error
        })
    }
}

//UPDATE
// data->req.body
// id-> /flights/:id
const update = async (req, res) => {
    try {
        const city = City.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "updated city successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Not able to update a city",
            err:error
        })
    }
}

//DELETE
//id-> /flights/:id
const destroy = async (req, res) => {
    try {
        const response = City.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "deleted city successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Not able to delete a city",
            err:error
        })
    }
}

//GET
//id-> /flights/:id
const get = async (req, res) => {
    try {
        const city = City.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "fetched city successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message:"Not able to fetch a city",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}