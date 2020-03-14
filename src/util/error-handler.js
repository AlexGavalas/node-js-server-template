import { logger } from './logging';

const errorHandler = (err, req, res, next) => {

    logger.error(err.message);

    if (res.headersSent) return next(err);

    try {
        
        const { description, status } = JSON.parse(err.message);

        res.status(status).json({ error: description });
    }

    catch (e) {
        
        res.status(500).json({ error: 'Something went wrong.' });
    }
};

const register = (app) => {

    app.use(errorHandler);
};

export default {
    register,
};
