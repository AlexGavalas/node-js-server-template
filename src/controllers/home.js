import throwError from '../util/throw-error';

const read = (req, res) => {

    res.send('HELLO');
};

const create = (req, res, next) => {

    try {

        const { resource } = req.body;

        if (!resource) throwError({ description: 'Empty request body.', status: 400 });

        if (resource.answer === 'BOMB IT') throw new Error();

        if (resource.answer === 17) throwError();

        res.sendStatus(201);
    }

    catch (e) {

        next(e);
    }
};

export default {
    read,
    create,
};
