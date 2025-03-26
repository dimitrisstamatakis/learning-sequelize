const defaultPath = '../models/index.js';

/**
 * @dev - Imports all Models exported from "/models/index.ts", so that they Model Definitions are executed.
 * @description - As we are using the a Sequelize Instance to create the Models, it makes sense that the code for defining the models must be executed before "syncing" with the DB.
 */
export const modelsImporter = async (modelsPath: string = defaultPath) => {
    const path = import.meta.resolve(modelsPath);
    await import(path);
};
