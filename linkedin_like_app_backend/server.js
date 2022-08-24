const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const user = require('./routes/user');

const PORT = 3000;
const CONNECTION_URL = 'mongodb://127.0.0.1:27017/LinkedInLikeApp';

const app = express();

// configure the middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(CONNECTION_URL);

const connection = mongoose.connection;
connection.once('open', function() {
    console.log('MongoDB database connection established successfully!');
});

app.get('/', (req, res) => {
    res.send('Hey, I am ready and working as expected.');
});


app.use('/User', user);

app.listen(PORT, function() {
    console.log('Server is running on Port: ' + PORT);
});