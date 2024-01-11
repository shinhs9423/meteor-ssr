import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {render} from "react-dom";

const App = () => (
    <div>
        <h1>Server-Side Rendering with Meteor</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/test" element={<div>test</div>} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;