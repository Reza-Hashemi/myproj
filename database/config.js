const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/xxx');

mongoose.connection.on('connected', () => console.log('connected to database'));