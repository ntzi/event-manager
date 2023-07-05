import app from './api/loaders/appLoader.js';
import { postgresLoad } from './api/loaders/dbLoader.js';
import config from './config/config.js';

const {
	api: { port },
} = config;

await postgresLoad();

app.listen(port, () => {
	console.log(`Event-Manager-api is listening on port ${port}`);
});

export default app;
