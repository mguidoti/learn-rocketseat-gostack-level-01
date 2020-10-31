const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

// Middleware
function logRequests(request, response, next) {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.log(logLabel);

    return next()
}

function validateProjectId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid id' });
    }

    return next();

}

// That's the first use of a middleware
app.use(logRequests);

// That's the third form of use a middleware
app.use('/projects/:id', validateProjectId);

// HTML routes
app.get('/projects', (request, response) => {
    const { title } = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    // console.log(query);

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

// That's the second use of a middleware
app.put('/projects/:id', validateProjectId, (request, response) => {
    // const params = request.params;
    // const { id } = request.params;

    // console.log(params);
    // console.log(id);

    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({error: 'project not found.'});
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;


    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({error: 'project not found.'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

// Listen to a specific port
app.listen(3333, () => {
    console.log('Back-end started! ¯\\\_(ツ)_/¯')
}); 
