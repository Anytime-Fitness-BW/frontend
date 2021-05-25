import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const InstructorDashboard = () => {

  const history = useHistory();

  const onClick = event => {
    event.preventDefault()
    history.push('/instructor/create')
  }

  const onClick2 = event => {
    event.preventDefault()
    history.push('/instructor/classes')
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
        <section className='instructor-title'>
          <h3>ANYWHERE FITNESS</h3>
        </section>
        <section className='user'>
          <img className='user-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU' alt='user.img' />
          <h4 className='username'>Instructor Name</h4>
        </section>
        <section>
          <img className='menu-image' src='https://cdn3.iconfinder.com/data/icons/mini-icon-set-general-office/91/General_-_Office_30-512.png' alt='user.img' />
        </section>
      </div>

      <section>
        <h1>Welcome Back!</h1>
      </section>

      <div className='dashboard-buttons'>
        <button className='button1' onClick={onClick}>Create a Class</button>
        <button className='button2' onClick={onClick2}>My Classes</button>
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

export default InstructorDashboard