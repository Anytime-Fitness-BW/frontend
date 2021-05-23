import './App.css';

import InstructorSignUp from './InstructorSignUp';
import React from 'react'
import {  Route, Link } from "react-router-dom";
import HomePage from './HomePage'

function App() {
  return (
    <div className="App">
      <InstructorSignUp/>
     
      <nav>
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
