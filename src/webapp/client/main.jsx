import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import App  from '../imports/ui/App';
import { onPageLoad } from "meteor/server-render";

const defaultRoutes = () => {
    onPageLoad((sink) => {
        console.log("sink: ", sink);
    })
}

Meteor.startup(() => {

    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<App />);
});
