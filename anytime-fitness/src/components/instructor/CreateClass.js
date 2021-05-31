import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'

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
  confirm: false,
}


const CreateClass = (props) => {
  const [formValues, setFormValues] = useState(initialState)
  const { push } = useHistory()

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log( {
      name:formValues.className,
      date:formValues.date,
      startTime:formValues.time,
      duration: formValues.duration,
      type: formValues.type,
      intensity: formValues.intensity,
      location: formValues.location,
      numberOfRegisteredAttendees: formValues.attendees,
      maxClassSize: formValues.maxSize
    })

    // "name": "hot yoga",
    // "type": "stretch",
    // "startTime": "3",
    // "duration": "60",
    // "intensity": "high",
    // "location": "airport",
    // "numberOfRegisteredAttendees": "10",
    // "maxClassSize": "15"

    axiosWithAuth()
      .post('/api/classes', {
        name:formValues.className,
        startTime:formValues.time,
        duration: formValues.duration,
        type: formValues.type,
        intensity: formValues.intensity,
        location: formValues.location,
        numberOfRegisteredAttendees: formValues.attendees,
        maxClassSize: formValues.maxSize
      })
      .then(res => {
        console.log("create post RES", res)
        push('/instructor/classes')
      })
      .catch(err => { console.log("create post ERR", err) })
  }

  return (
    <div className='background-img'>
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

      <div className='create-class-container'>
        <h1 className='form-title'>Create a New Class</h1>
        <form id='createClassForm' onSubmit={submitHandler}>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="className"
              value={formValues.className}
              onChange={changeHandler}
              placeholder="Class Name"
              size='35'
            />
          </label>
          <div className='date-and-time'>
            <div className='date'>
              <label>
                <input
                  className='create-text-input'
                  type="date"
                  name="date"
                  value={formValues.date}
                  onChange={changeHandler}
                  placeholder="Date"
                />
              </label>
            </div>
            <div className='time'>
              <label>
                <input
                  className='create-text-input'
                  type="time"
                  name="time"
                  value={formValues.time}
                  onChange={changeHandler}
                  placeholder="Time"
                />
              </label>
            </div>
          </div>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="duration"
              value={formValues.duration}
              onChange={changeHandler}
              placeholder="Duration"
              size='35'
            />
          </label>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="type"
              value={formValues.type}
              onChange={changeHandler}
              placeholder="Type"
              size='35'
            />
          </label>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="location"
              value={formValues.location}
              onChange={changeHandler}
              placeholder="Location"
              size='35'
            />
          </label>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="intensity"
              value={formValues.intensity}
              onChange={changeHandler}
              placeholder="Intensity Level"
              size='35'
            />
          </label>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="price"
              value={formValues.price}
              onChange={changeHandler}
              placeholder="$ Price"
              size='35'
            />
          </label>
          <label>
            <input
              className='create-text-input'
              type="text"
              name="maxSize"
              value={formValues.maxSize}
              onChange={changeHandler}
              placeholder="Max Class Size"
              size='35'
            />
          </label>
          <label className='create-checkbox-text'>
            <input
              className='create-checkbox'
              type="checkbox"
              name="confirm"
              id="confirm"
              value={formValues.confirm}
              onChange={changeHandler}
            />
          Check box to confirm class
        </label>
          <button className='create-button' type="submit">Create</button>
        </form>
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

export default CreateClass