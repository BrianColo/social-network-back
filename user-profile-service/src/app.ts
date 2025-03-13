import express from 'express';
import { json } from 'body-parser';
import { setUserRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`User Profile Service is running on http://localhost:${PORT}`);
});