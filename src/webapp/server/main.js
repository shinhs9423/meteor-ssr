import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { onPageLoad } from 'meteor/server-render';
import {renderToString} from "react-dom/server";
import React from 'react';
import SsrComponent from "../imports/ui/SsrComponent";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://react-tutorial.meteor.com/simple-todos/01-creating-app.html',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});

onPageLoad(async (sink) => {

  const {path} = sink.request;

  if(path === "/home"){
    console.log('this is home!!');
    const html = renderToString(<div>{path}</div>); // 데이터를 사용하여 렌더링
    // sink.appendToHead(`<meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1">
    //   <title>My SSR App</title>`);
    sink.renderIntoElementById('app', html);
  }
});