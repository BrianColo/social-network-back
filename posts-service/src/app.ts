import express from 'express';
import { json } from 'body-parser';
import { setPostRoutes } from './routes/postRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setPostRoutes(app);

app.listen(PORT, () => {
    console.log(`Posts service is running on http://localhost:${PORT}`);
});