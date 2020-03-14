import { expressLogger } from '../util/logging';

const register = (app) => {

    app.use(expressLogger);
};

export default {
    register,
};
