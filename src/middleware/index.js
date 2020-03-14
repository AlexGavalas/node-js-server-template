import securityHeaders from './sec';
import logging from './log';
import requestBody from './req-body';

const registerAll = (app) => {

    logging.register(app);
    
    securityHeaders.register(app);
    
    requestBody.register(app);
};

export default {
    registerAll,
};
