import { createDBConnection, dbInstance } from '@db/db.js';
import { modelsImporter } from '@utils/modelsImporter.js';

export const sequelizeInit = async () => {
    try {
        console.log('');
        console.log('⏳ Establishing Connection with MySQL...');
        console.log('');
        await createDBConnection();

        console.log('');
        console.log('🎉 Connection Established!');
        console.log('');
    } catch (error) {
        console.log('');
        console.log(
            '🚨 Error encountered while trying to Establishing Connection.'
        );
        console.log(error);

        throw error;
    }

    try {
        console.log('');
        console.log('⏳ Importing Models before starting the Sync...');
        console.log('');

        await modelsImporter();

        console.log('');
        console.log('🎉 Models Imported!');
        console.log('');
    } catch (error) {
        console.log('');
        console.log('🚨 Error encountered while trying to Import Models.');
        console.log(error);

        throw error;
    }

    try {
        console.log('');
        console.log('⏳ Syncing the local Models with MySQL...');
        console.log('');

        await dbInstance.sync(); // Creates tables if they don’t exist
        // await dbInstance.sync({ force: true }); // Drops and recreates tables
        // await dbInstance.sync({ alter: true }); // Alters tables to match models

        console.log('');
        console.log('🎉 Sync was Successful!');
        console.log('');
    } catch (error) {
        console.log('');
        console.log('🚨 Error encountered while trying to Sync.');
        console.log(error);

        throw error;
    }
};
