import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const initialState = {
  className: '',
  date: '',
  time: '',
  duration: '',
  type: '',
  location: '',
  intensity: '',
  price: '',
  attendees: '',
  maxSize: '',
}

const MyClasses = () => {
  const [classes, setClasses] = useState(initialState)

  // to access the classes available upon mount

  useEffect(() => {
    axios
      .get('')
      .then(res => {
        console.log('MyClasses get RES', res)

      })
      .then(err => { console.log('MyClasses get ERR', err) })
  }, [])

  // to update the class

  const editHandler = (e) => {
    e.preventDefault()
    axios
      .put('', classes)
      .then(res => {
        console.log('MyClasses put RES', res)
      })
      .catch(err => {
        console.log('MyClasses put ERR', err)
      })
  }

  // to delete a class

  const deleteHandler = (e) => {
    axios
      .put('', classes)
      .then(res => { console.log('MyClasses put RES', res) })
      .catch(err => { console.log('MyClasses put ERR', err) })
  }

  const changeHandler = (e) => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value
    })
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

      <section className='middle-section'>
        <h1>My Classes</h1>
      </section>

      <form>
        <h4 className='sort-by'>Sort By: </h4>
        <div className='filter-bar'>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="className"
              value={classes.className}
              onChange={changeHandler}
              placeholder="Class Name"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="date"
              name="date"
              value={classes.date}
              onChange={changeHandler}
              placeholder="Date"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="time"
              name="time"
              value={classes.time}
              onChange={changeHandler}
              placeholder="Time"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="duration"
              value={classes.duration}
              onChange={changeHandler}
              placeholder="Duration"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="type"
              value={classes.type}
              onChange={changeHandler}
              placeholder="Type"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="location"
              value={classes.location}
              onChange={changeHandler}
              placeholder="Location"
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="intensity"
              value={classes.intensity}
              onChange={changeHandler}
              placeholder="Intensity Level"
            />
          </label>
        </div>
        <button className='signup-button'>Search</button>
      </form>

      <div className='mc-classes-container'>
        <section className='mc-class-card'>
          <img className='mc-class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mc-mini-section-container'>
            <div className='mc-mini-section'>
              <p className='mc-class-info'>Class Name: Power Hour</p>
              <p className='mc-class-info'>Location: Tampa, FL</p>
              <p className='mc-class-info'>Date: June 13, 2021</p>
              <p className='mc-class-info'>Time: 4:30pm to 6:00pm</p>
              <button className='button-1' onClick={editHandler}>Edit</button>
            </div>
            <div className='mc-mini-section-2'>
              <p className='mc-class-info'>Duration: 1 months</p>
              <p className='mc-class-info'>Level: Intermediate</p>
              <p className='mc-class-info'>Type: Cycling</p>
              <p className='mc-class-info'>Price: $45</p>
              <button className='button-2' onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        </section>



        <section className='mc-class-card'>
          <img className='mc-class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mc-mini-section-container'>
            <div className='mc-mini-section'>
              <p className='mc-class-info'>Class Name: Wishful Shrinking</p>
              <p className='mc-class-info'>Location: Orlando, FL</p>
              <p className='mc-class-info'>Date: June 6, 2021</p>
              <p className='mc-class-info'>Time: 7:30pm to 9:00pm</p>
              <button className='button-1' onClick={editHandler}>Edit</button>
            </div>
            <div className='mc-mini-section-2'>
              <p className='mc-class-info'>Duration: 2 months</p>
              <p className='mc-class-info'>Level: Beginner</p>
              <p className='mc-class-info'>Type: Circuit Training</p>
              <p className='mc-class-info'>Price: $45</p>
              <button className='button-2' onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        </section>

        <section className='mc-class-card'>
          <img className='mc-class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mc-mini-section-container'>
            <div className='mc-mini-section'>
              <p className='mc-class-info'>Class Name: Fab, Fit, and Fun</p>
              <p className='mc-class-info'>Location: Miami, FL</p>
              <p className='mc-class-info'>Date: June 24, 2021</p>
              <p className='mc-class-info'>Time: 1:30pm to 3:00pm</p>
              <button className='button-1' onClick={editHandler}>Edit</button>
            </div>
            <div className='mc-mini-section-2'>
              <p className='mc-class-info'>Duration: 4 months</p>
              <p className='mc-class-info'>Level: Expert</p>
              <p className='mc-class-info'>Type: Bootcamp</p>
              <p className='mc-class-info'>Price: $45</p>
              <button className='button-2' onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        </section>
      </div>

      <nav>
        <h1></h1>
        <div className='client-nav-links'>
          <Link to='/dashboard/instructor'>Back to Dashboard</Link>
        </div>
      </nav>
    </div>
  )
}

export default MyClasses