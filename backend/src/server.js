const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://annaguercio:annaguercio@cluster0.n9sa4.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


server.use(express.json());
server.use(routes);


server.listen(8080);