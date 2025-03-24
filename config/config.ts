import type { ConnectionOptions, Dialect } from 'sequelize';

type ConnectionConfig = ConnectionOptions & { dialect: Dialect };

let config: ConnectionConfig;
const env = process.env;

switch (env.NODE_ENV) {
    case 'local':
        config = {
            username: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
            host: env.DB_HOST,
            dialect: env.DB_DIALECT,
        };
        break;

    default:
        throw new Error(`Current NODE_ENV not supported (${env.NODE_ENV})`);
}

export default config;
