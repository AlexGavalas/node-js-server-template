import helmet from 'helmet';

const register = (app) => {
    
    app.use(helmet());
};

export default {
    register,
};
