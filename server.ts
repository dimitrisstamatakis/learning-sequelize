import { sequelizeInit } from 'dbInit.js';
import express from 'express';
import 'express-async-errors';

import { globalErrorHandler } from '@middleware/errorHandler.js';
import { setupMiddleware } from 'middleware/middleware.js';
import { seedLicenses, seedUsers } from 'tests/seed.js';
import Routes from './routes/routes.js';

const app = express();

setupMiddleware(app);

await sequelizeInit(); // Established Connection, Imports Sequelize Models and Syncs with MySQL DB.

app.get('/', function (_, res) {
    res.send('Hello World 🎉');
});

app.use('/api', Routes);

app.use(globalErrorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () =>
    console.log(
        `✅ Listening to PORT: ${port}\n🔗 Home Page: http://localhost:${port}/\n🔗 Users Endpoint: http://localhost:${port}/api/user`
    )
);

const users = await seedUsers();
await seedLicenses(users);
