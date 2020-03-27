import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;

//  Explain what a token is used for.
//    Tokens are strings of cryptic text stored on the client side using local storage. The server is then able to read the token and make decisions
//    for data transfer based on the client's permissions.
//  What steps can you take in your web apps to keep your data secure?
//    We can keep data secure by creating protected routes - routes that only render after proper authentication. 
//  Describe how web servers work.
//    Web servers are the physical computer that stores the code for websites to be shared when the code is loaded to our websites. Coincidentally,
//    the software program that tells the server which pages to retrieve are also called web servers.
//  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
//  Crud- create, read, update, delete -- refers to the basic functions that an application fulfills.
//  In terms of api interface, create-post, read-get, update-put, delete-delte.

