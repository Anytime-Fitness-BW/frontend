import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddClass from './AddClass'


const ClientDashboard = () => {
  
  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/client/add">Find the class for you!</Link>
          </li>
        </ul>  
      </div>
      <div>
      <Route path="/client/add">
        <AddClass />
      </Route>
      </div>
    </Router>
  )
}

export default ClientDashboard