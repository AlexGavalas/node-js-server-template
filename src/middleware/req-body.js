import express from 'express';

const register = (app) => {

    app.use(express.json());
    
    app.use(express.urlencoded({ extended: true }));
};

export default {
    register,
};
