import './App.css';
import CreateClass from './components/instructor/CreateClass';
import React, { useState, useEffect } from 'react'
import {  Route, Link } from "react-router-dom";
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
     
      <nav>
        <h1></h1>
          <div className='nav-links'>
              <Link to='/login'>Sign in</Link>
          </div>
      </nav>


      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/register'></Route>
      <Route path='/register/instructor'></Route>
      <Route path='/login'></Route>
    </div>
  );
}

export default App;
