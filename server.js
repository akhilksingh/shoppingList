const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDb
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));

// Use Routes    
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

