import React from 'react'
import { Link, useHistory } from 'react-router-dom'



const ClientDashboard = () => {
  const history = useHistory();

  const onClick = event => {
    event.preventDefault()
    history.push('/dashboard/add')
}


  return (
    <div>
      <div className='header'>
        <section className='search-container'>
          <img className='search-image' src='https://cdn.iconscout.com/icon/free/png-256/search-1767866-1502119.png' alt='user.img' />
          <label>
            <input className='search' type='search' placeholder='Search' />
          </label>
        </section>
        <section className='client-title'>
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
      </div>

      <div className='classes-container'>
        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Wishful Shrinking</p>
              <p className='class-info'>Location: Orlando, FL</p>
              <p className='class-info'>Date: June 6, 2021</p>
              <p className='class-info'>Time: 7:30pm to 9:00pm</p>
            </div>
            <div className='mini-section-2'>
              <p className='class-info'>Duration: 2 months</p>
              <p className='class-info'>Level: Beginner</p>
              <p className='class-info'>Type: Circuit Training</p>
              <p className='class-info'>Instructor: Alex Smith</p>
            </div>
          </div>
          <p className='price'>Price: $45</p>
        </section>


        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Power Hour</p>
              <p className='class-info'>Location: Tampa, FL</p>
              <p className='class-info'>Date: June 13, 2021</p>
              <p className='class-info'>Time: 4:30pm to 6:00pm</p>
            </div>
            <div className='mini-section-2'>
              <p className='class-info'>Duration: 1 months</p>
              <p className='class-info'>Level: Intermediate</p>
              <p className='class-info'>Type: Cycling</p>
              <p className='class-info'>Instructor: Alison Slate</p>
            </div>
          </div>
          <p className='price'>Price: $30</p>
        </section>

        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Fab, Fit, and Fun</p>
              <p className='class-info'>Location: Miami, FL</p>
              <p className='class-info'>Date: June 24, 2021</p>
              <p className='class-info'>Time: 1:30pm to 3:00pm</p>
            </div>
            <div className='mini-section-2'>
              <p className='class-info'>Duration: 4 months</p>
              <p className='class-info'>Level: Expert</p>
              <p className='class-info'>Type: Bootcamp</p>
              <p className='class-info'>Instructor: Mary Wilson</p>
            </div>
          </div>
          <p className='price'>Price: $80</p>
        </section>
      </div>
      <div className='class-signup-buttons' onClick={onClick}>
        <button className='signup-button'>SIGN UP FOR A CLASS TODAY</button>
        <button className='signup-button'>SIGN UP FOR A CLASS TODAY</button>
        <button className='signup-button'>SIGN UP FOR A CLASS TODAY</button>
      </div>

      <nav>
        <h1></h1>
        <div className='client-nav-links'>
          <Link to='/'>Log Out</Link>
        </div>
      </nav>
    </div>
  )
}

export default ClientDashboard