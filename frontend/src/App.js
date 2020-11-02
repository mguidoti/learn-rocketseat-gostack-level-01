import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from '../../assets/header.png';

import api from './services/Api';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      api.get('/projects').then(response => {
        setProjects(response.data);
      })
    }, []);

    async function handleAddProject() {
        // Old school JavaScript of doing things, not respecting the immutable
        // concept required by React
        //projects.push(`Novo projeto ${Date.now()}`);

        // Applying the immutable concept
        //setProjects([...projects, `Novo projeto ${Date.now()}`]);

        // Create the project in the API
        const response = await api.post('/projects', {
          title: `Novo projeto ${Date.now()}`,
          owner: "Marcus Guidoti"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        // Fragmentation concept, empty HTML tags to avoid unecessary additions
        // to the DOM
        <>
          <img width={300} src={backgroundImage}></img>

          <Header title="Projects" />

          <ul>
              { projects.map(project => <li key={project.id}>{project.title}</li>) }
          </ul>

          <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
  }

export default App;