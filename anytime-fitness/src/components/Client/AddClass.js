import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

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


const AddClass = (props) => {
  const [classes, setClasses] = useState(initialState)
  const { push } = useHistory()

  props = { initialState }


  // a list of classes to choose from
  axios
    .get('')
    .then(res => {
      console.log("AddClass get RES", res)
    })
    .catch(err => {
      console.log("AddClass get ERR", err)
    })

  // adds the class    
  axios
    .post('', classes)
    .then(res => {
      console.log("AddClass post RES", res)
    })
    .catch(err => {
      console.log("AddClass post ERR", err)
    })

  const changeHandler = (e) => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addClasses(classes)
  }

  return (
    <div>
      <h1>Looking for a class?</h1>
      <form onSubmit={handleSubmit}>
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

      <div className='classes-container'>
        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Wishful Shrinking</p>
              <p className='class-info'>Instructor: Alex Smith</p>
              <p className='class-info'>Time: 7:30pm to 9:00pm</p>
              <p className='class-info'>Date: June 6, 2021</p>
              <p className='class-info'>Location: Orlando, FL</p>
            </div>
          </div>
          <p className='price'>Price: $45</p>
        </section>


        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Power Hour</p>
              <p className='class-info'>Instructor: Alison Slate</p>
              <p className='class-info'>Time: 4:30pm to 6:00pm</p>
              <p className='class-info'>Date: June 13, 2021</p>
              <p className='class-info'>Location: Tampa, FL</p>
            </div>
          </div>
          <p className='price'>Price: $30</p>
        </section>

        <section className='class-card'>
          <img className='class-img' src='https://i.stack.imgur.com/y9DpT.jpg' alt='placeholder.img' />
          <div className='mini-section-container'>
            <div className='mini-section'>
              <p className='class-info'>Class Name: Fab, Fit, and Fun</p>
              <p className='class-info'>Instructor: Mary Wilson</p>
              <p className='class-info'>Time: 1:30pm to 3:00pm</p>
              <p className='class-info'>Date: June 24, 2021</p>
              <p className='class-info'>Location: Miami, FL</p>
            </div>
          </div>
          <p className='price'>Price: $80</p>
        </section>
      </div>
      <div className='class-signup-buttons'>
        <button className='signup-button'>REGISTER TODAY</button>
        <button className='signup-button'>REGISTER TODAY</button>
        <button className='signup-button'>REGISTER TODAY</button>
      </div>
    </div>
  )
}

export default AddClass

  // // <label> 
  // <input 
  // type="text"
  // name="attendees"
  // value={classes.confirm}
  // onChange={changeHandler}
  // placeholder="Number of Attendees"
  // />
  // </label>

  // < label >
  // <input
  //   type="text"
  //   name="price"
  //   value={classes.price}
  //   onChange={changeHandler}
  //   placeholder="$ Price"
  // />
  // </label >

  // < label >
  // <input
  //   type="text"
  //   name="maxSize"
  //   value={classes.maxSize}
  //   onChange={changeHandler}
  //   placeholder="Max Class Size"
  // />
  // </label >