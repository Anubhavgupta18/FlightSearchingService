const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const bodyParser = require('body-parser');


const createAndStartServer = async () => {
    //create the express object
    const app = express();

    //setting up middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);

    });
};

createAndStartServer();