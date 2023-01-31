const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');
const { Airport,City } = require('./models/index');


const createAndStartServer = async () => {
    //create the express object
    const app = express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //routing it to ./router/index
    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`server started on ${PORT}`);
        // if (process.env.db_sync) {
        //     db.sequelize.sync({ alter: true });
        // }
        // const city = await City.findOne({
        //     where: {
        //         id:4
        //     },
        //     include: Airport
        // });
        // const airports = await city.getAirports();
        // console.log(city,airports);

        
    });

};

createAndStartServer();