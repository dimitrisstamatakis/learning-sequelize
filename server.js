const Sequelize = require('sequelize');
const express = require('express');

const app = express();

// console.log(process.env);
const config = require('./config/config');
const sequelize = new Sequelize(
    config.databaseName,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

app.get('/', function (req, res) {
    res.send('Hello World');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening to PORT: ${port}`));
