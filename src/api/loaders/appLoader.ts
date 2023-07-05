import cors from 'cors';
import express, { Application } from 'express';

import errorHandler from '../middleware/errorHandler.js';
import routes from '../routes/index.js';
import { responsesLoader } from './responsesLoader.js';

const app: Application = express();
app.use(cors());
app.use(express.json());

// Initialize before using rootRouter
responsesLoader(app);

app.use('/', routes);

// Initialize after using rootRouter
errorHandler(app);

export default app;
