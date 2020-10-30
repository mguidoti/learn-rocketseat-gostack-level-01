const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ 
        message: 'Hello World'
    });
});

// Listen to a specific port
app.listen(3333);
