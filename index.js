// Basic server
const express = require('express');
const app = express();
const path = require('path');
// hidden vars
// const dotenv = require('dotenv');
// const Knex = require('knex');
// dotenv.config();


const port = process.env.PORT || 5000;
// production static route
app.use(express.static(path.join(__dirname, 'calcfront/build')));

// home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'calcfront/public/index.html'))
});

// test route
app.get('/test', (req, res) => {
    res.send(`dash home, ${process.env.TEST_VAR || 'env file not here, nice!'}`);
});

// catchall (for React)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'calcfront/build/index.html'));
    (err) => {
        if (err) {
            res.status(500).send(err);
        }
    };
});

app.listen(port, () => {
    console.log(`Live on port: ${port}`)
});