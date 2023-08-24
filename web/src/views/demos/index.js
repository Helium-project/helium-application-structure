import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <>
        <h1>Soon, and by the way, this page is made with react.</h1>
    </>
);
