import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CreateClass from './CreateClass'
import MyClasses from './MyClasses'

const InstructorDashboard = () => {

  return (

    <Router>
      <h1>Welcome Back!</h1>
      <div>
        <ul>
          <li>
            <Link to="/instructor/create">Create a Class</Link>
          </li>
          <li>
            <Link to="/instructor/classes">My Classes</Link>
          </li>
        </ul>  
      </div>
      <div>
        <Route path="/instructor/create">
          <CreateClass />
        </Route>
        <Route path="/instructor/classes">
          <MyClasses />
        </Route>
      </div>
    </Router>
  )
}

export default InstructorDashboard