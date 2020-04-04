import request from 'supertest';

import server from '../src/util/setup-server';

const app = server.setup();

describe('Server responds correctly', () => {
    
    test('Index route should respond with 200', async () => {
        
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
    });

    test('Should respond with 400 on empty request body', async () => {
    
        const response = await request(app).post('/');

        expect(response.status).toBe(400);
    });

    test('Should respond with 500 on wrong request body format', async () => {
    
        const response = await request(app).post('/').send({ resource: { answer: 17 } });

        expect(response.status).toBe(500);
    });

    test('Should respond with 500 on unexpected error', async () => {
    
        const response = await request(app).post('/').send({ resource: { answer: 'BOMB IT' } });

        expect(response.status).toBe(500);
    });

    test('Should respond with 201 on success', async () => {
    
        const response = await request(app).post('/').send({ resource: { answer: 42 } });

        expect(response.status).toBe(201);
    });

    test('Non existing route should respond with 404', async () => {
        
        const response = await request(app).get('/some-non-existing-route');

        expect(response.status).toBe(404);
    });
});
