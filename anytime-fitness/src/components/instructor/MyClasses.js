import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'

const initialState = [{
  name: '',
  startTime: '',
  duration: '',
  type: '',
  location: '',
  intensity: '',
  numberOfRegisteredAttendees: '',
  maxClassSize:'',
}]

const mockInitialState = [{
  name: 'Underwater Basket Weaving',
  startTime: '3pm',
  duration: '3 mo',
  type: 'Aquatic',
  location: 'Lake Michigan',
  intensity: 'High',
  numberOfRegisteredAttendees: '3',
  maxClassSize: '10',
  // date: 'June 9th',
  // price: '$300',
  // description:''
}]

const MyClasses = () => {
  const [classes, setClasses] = useState(initialState)

  // to access the classes available upon mount

  useEffect(() => {
    axiosWithAuth()
      .get('/api/classes')
      .then(res => {
        console.log('MyClasses get RES', res)
        setClasses(res.data)
      })
      .then(err => { console.log('MyClasses get ERR', err) })
  }, [])

  // to update the class

  const editHandler = (e) => {
    e.preventDefault()
 
    const id = classes.id
    axiosWithAuth()
      .put(`/api/classes/${id}`, classes)
      .then(res=>{
        console.log('MyClasses put RES', res)
        const editClass = classes.filter((aClass) => aClass.id !== id )
        editClass.push(classes)
        setClasses(editClass)
      })
        .catch(err => {
        console.log('MyClasses put ERR', err)
      })
  }
  // to delete a class

  const deleteHandler = (delClass) => {
    axiosWithAuth()      
    .delete(`/api/classes/${delClass}`, classes)
      .then(res => { 
        console.log('MyClasses delete RES', res) 
        const remainingClasses = classes.filter((aClass)=> aClass.id !== Number(res.data))
        setClasses(remainingClasses)
    })
      .catch(err => { console.log('MyClasses delete ERR', err) })
  }

  const changeHandler = (e) => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value
    })
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
              value={classes.name}
              onChange={changeHandler}
              placeholder="Class Name"
              style={{backgroundColor: 'lightgray'}}
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
              style={{backgroundColor: 'lightgray'}}
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="time"
              value={classes.startTime}
              onChange={changeHandler}
              placeholder="Time"
              style={{backgroundColor: 'lightgray'}}
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
              style={{backgroundColor: 'lightgray'}}
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
              style={{backgroundColor: 'lightgray'}}
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
              style={{backgroundColor: 'lightgray'}}
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="registeredAttendees"
              value={classes.numberOfRegisteredAttendees}
              onChange={changeHandler}
              placeholder="Location"
              style={{backgroundColor: 'lightgray'}}
            />
          </label>
          <label>
            <input
              className='filter-bar'
              type="text"
              name="maxClassSize"
              value={classes.maxClassSize}
              onChange={changeHandler}
              placeholder="Max Attendees"
              style={{backgroundColor: 'lightgray'}}
            />
          </label>
        </div>
        <button className='filter-button'>Search</button>
      </form>

      <div className='mc-classes-container'>
        <section className='mc-class-card'>
          <img className='mc-class-img' src='https://media.istockphoto.com/vectors/weights-symbol-icon-black-minimalist-dumbbell-outline-isolated-vector-vector-id1130190327?k=6&m=1130190327&s=170667a&w=0&h=TvK9RZNYmEHPpWMKRHMA6TQVVHtPUMtdhhHZmDcecBQ=' alt='placeholder.img' />
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
          <img className='mc-class-img' src='https://media.istockphoto.com/vectors/weights-symbol-icon-black-minimalist-dumbbell-outline-isolated-vector-vector-id1130190327?k=6&m=1130190327&s=170667a&w=0&h=TvK9RZNYmEHPpWMKRHMA6TQVVHtPUMtdhhHZmDcecBQ=' alt='placeholder.img' />
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
          <img className='mc-class-img' src='https://media.istockphoto.com/vectors/weights-symbol-icon-black-minimalist-dumbbell-outline-isolated-vector-vector-id1130190327?k=6&m=1130190327&s=170667a&w=0&h=TvK9RZNYmEHPpWMKRHMA6TQVVHtPUMtdhhHZmDcecBQ=' alt='placeholder.img' />
          <div className='mc-mini-section-container'>
            <div className='mc-mini-section'>
              <p className='mc-class-info'>Class Name: Fab, Fit, and Fun</p>
              <p className='mc-class-info'>Location: Miami, FL</p>
              <p className='mc-class-info'>Date: June 24, 2021</p>
              <p className='mc-class-info'>Time: 1:30pm to 3:00pm</p>
            </div>
            <div className='mc-mini-section-2'>
              <p className='mc-class-info'>Duration: 4 months</p>
              <p className='mc-class-info'>Level: Expert</p>
              <p className='mc-class-info'>Type: Bootcamp</p>
              <p className='mc-class-info'>Price: $45</p>
            </div>
          </div>
        </section>

        <section className='mc-class-card'>
          <img className='mc-class-img' src='https://media.istockphoto.com/vectors/weights-symbol-icon-black-minimalist-dumbbell-outline-isolated-vector-vector-id1130190327?k=6&m=1130190327&s=170667a&w=0&h=TvK9RZNYmEHPpWMKRHMA6TQVVHtPUMtdhhHZmDcecBQ=' alt='placeholder.img' />
          <div className='mc-mini-section-container'>
            {classes.map((aClass)=> {
            return<div>
            <p>{aClass.id}</p>
            <p>Class: {aClass.name}</p>
            <p>Type: {aClass.type}</p>
            <p>Time: {aClass.startTime}</p>
            <p>Duration: {aClass.duration}</p>
            <p>Intensity: {aClass.intensity}</p>
            <p>Location: {aClass.location}</p>
            <p>Attendees: {aClass.numberOfRegisteredAttendees}</p>
            <p>Max Attendees: {aClass.maxClassSize}</p>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        })}
        </div>
        </section>
        
      </div>

      <nav>
        <div className='client-nav-links'>
          <Link to='/dashboard/instructor'>Back to Dashboard</Link>
        </div>
      </nav>
    </div>
  )
}

export default MyClasses