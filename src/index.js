const express = require('express');
const { PORT } = require('./config/serverConfig.js');
const createAndStartServer = async () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);

    });
};

createAndStartServer();