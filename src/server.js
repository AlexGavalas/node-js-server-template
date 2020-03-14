import 'dotenv/config';
import express from 'express';

import middleware from './middleware';
import routes from './routes';
import errorHandler from './util/error-handler';

const app = express();

middleware.registerAll(app);

routes.register(app);

errorHandler.register(app);

export default app;
