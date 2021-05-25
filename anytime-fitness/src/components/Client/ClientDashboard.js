import React from 'react'
import { Link } from 'react-router-dom'



const ClientDashboard = () => {


  return (
    <div>
      <div className='header'>
        <section className='search-container'>
          <img className='search-image' src='https://cdn.iconscout.com/icon/free/png-256/search-1767866-1502119.png' alt='user.img' />
          <label>
            <input className='search' type='search' placeholder='Search' />
          </label>
        </section>
        <section className='title'>
          <h3>ANYWHERE FITNESS</h3>
        </section>
        <section className='user'>
          <img className='user-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU' alt='user.img' />
          <h4 className='username'>Client Name</h4>
        </section>
        <section>
          <img className='menu-image' src='https://cdn3.iconfinder.com/data/icons/mini-icon-set-general-office/91/General_-_Office_30-512.png' alt='user.img' />
        </section>
      </div>

      <div className='middle-section'>
        <h2 className='title-2'>Find the Class for You!</h2>
        <section className='filter'>
          <h4>Sort By:</h4>
          <h4>Time</h4>
          <h4>Date</h4>
          <h4>Duration</h4>
          <h4>Type</h4>
          <h4>Location</h4>
          <h4>Beginner</h4>
          <h4>Intermediate</h4>
          <h4>Expert</h4>
        </section>
      </div>
      <div className='classes-container'>
        <section className='class-card'>

        </section>
      </div>
      <div>
        {/* This is here so we can access the instructor dashboard until the auth code is hooked up */}
        <Link className='space' to="/dashboard/add">Clients</Link>
        <Link className='space' to="/dashboard/instructor">Instructors</Link>
      </div>
    </div>
  )
}

export default ClientDashboard