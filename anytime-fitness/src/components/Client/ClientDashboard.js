import React from 'react'
import { Link } from 'react-router-dom'



const ClientDashboard = () => {
  
  
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/add">Clients</Link>
        </li>
        <li>
          <Link to="/dashboard/instructor">Instructors</Link>
        </li>
      </ul>  
    </div>
  )
}

export default ClientDashboard