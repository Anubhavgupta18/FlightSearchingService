const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');

const createAndStartServer = async () => {
    //create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', ApiRoutes);
    //setting up middleware

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);

    });
};

createAndStartServer();