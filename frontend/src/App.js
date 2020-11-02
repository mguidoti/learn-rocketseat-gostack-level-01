import React, { useState } from 'react';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        // Old school JavaScript of doing things, not respecting the immutable
        // concept required by React
        //projects.push(`Novo projeto ${Date.now()}`);

        // Applying the immutable concept
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        // Fragmentation concept, empty HTML tags to avoid unecessary additions
        // to the DOM
        <>
            <Header title="Projects" />

            <ul>
                { projects.map(project => <li key={project}>{project}</li>) }
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;