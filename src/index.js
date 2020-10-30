const express = require('express');

const app = express();

app.use(express.json());

// HTML routes
app.get('/projects', (request, response) => {
    const query = request.query;

    console.log(query);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 5'
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body);


    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    const { id } = request.params;

    console.log(params);
    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});

// Listen to a specific port
app.listen(3333, () => {
    console.log('Back-end started! ¯\\\_(ツ)_/¯')
});
