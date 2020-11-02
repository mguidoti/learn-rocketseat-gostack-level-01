import React from 'react';

import Header from './components/Header';

function App() {
    return (
        // Fragmentation concept, empty HTML tags to avoid unecessary additions
        // to the DOM
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <u>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </u>
            </Header>
        </>
    );
}

export default App;