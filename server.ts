import express from 'express';
import { createDBConnection } from './database/db.js';

const app = express();

await createDBConnection();

app.get('/', function (req, res) {
    res.send('Hello World');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening to PORT: ${port}`));
