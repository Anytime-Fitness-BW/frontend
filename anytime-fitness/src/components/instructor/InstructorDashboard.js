import React from 'react'
import { Link } from 'react-router-dom'

const InstructorDashboard = () => {

  return (
    <div>
      <h1>Welcome Back!</h1>
      <ul>
        <li>
          <Link to="/instructor/create">Create a Class</Link>
        </li>
        <li>
          <Link to="/instructor/classes">My Classes</Link>
        </li>
      </ul>  
    </div>
  )
}

export default InstructorDashboard