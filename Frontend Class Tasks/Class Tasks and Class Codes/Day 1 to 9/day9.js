/*
how do websites updates dynamically?

traditional websites:
1. click link -> entire page will reload
2. slow user experience
3. hard to manage the UI

React : is a javasccript library for building UI.
created by facebook in 2013, used in: facebook news feed

why react?
1 component based architecture
2. virtual DOM (Document Object Model) - creates copy of memory, help us compare old vs new, updates only changed parts
3. Reusable and aintainable code

If you build a food delivery app, what components would you have created?

SPA - Single Page Application
a web app that loads one html page and dynamically updates content without full reload.

traditional vs SPA:
traditional: (multi page application) - new html request every time, page reload, slower
SPA - loads once, js handes routing, no full reload is required

examples of SPA - gmail, youtube

how SPA works:
1. browser loads index.html 
2. react loads js bundles 
3. components render dynamically
4. routing handled internally

how to set up react application?
1. node js installed
   node -v
   npm -v

2. create react app using Vite (modern build tool)
   npm create vite@latest myapp

   react javascript

3. cd myapp
4. npm install
5. npm run dev

what is JSX?
javascript XML

it allows html inside javascript

const ele= <h1>hello</h1>;

rules:
1. must return single parent element
example: return{
    <h1>hello</h1>
    <p>hi</p>
} //error
correct way:
return{
    <div>
    <h1>hello</h1>
    <p>hi</p>
    </div>
}

2. use className instead of class

<div className'box"Hellow</div>

3. use {} for js inside jsx

const name='sanjana';
return <h1>Hello {name}</h1>;

*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);