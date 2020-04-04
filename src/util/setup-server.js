import 'dotenv/config';
import express from 'express';

import middleware from '../middleware';
import routes from '../routes';
import errorHandler from './error-handler';

const setup = () => {
    
    const app = express();

    middleware.registerAll(app);
    
    routes.register(app);
    
    errorHandler.register(app);

    return app;
};

export default {
    setup,
};
