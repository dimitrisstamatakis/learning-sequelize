// import path from 'path';
import { Sequelize } from 'sequelize';
import config from '../config/config.js';

const createSequelize = () =>
    new Sequelize(config.database!, config.username!, config.password!, {
        dialect: config.dialect,
        host: config.host,
    });

const dbInstance = createSequelize();

const createDBConnection = async () => {
    try {
        await dbInstance.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
};

export { createDBConnection, dbInstance };
