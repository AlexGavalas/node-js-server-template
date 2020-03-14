import handler from '../controllers/home';

const add = (app) => {

    app.get('/', handler.read);
    app.post('/', handler.create);
};

export default {
    add,
};
