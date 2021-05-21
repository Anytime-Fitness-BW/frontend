import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateClass from './CreateClass'
import MyClasses from './MyClasses'

const InstructorDashboard = () => {

  return (
    <Router>
      <h1>Welcome Back!</h1>
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