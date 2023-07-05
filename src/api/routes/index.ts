import { Router } from 'express';

import eventRoutes from '../routes/event.js';

const rootRouter = Router();

rootRouter.use('/api', eventRoutes);

export default rootRouter;
