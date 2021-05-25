import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
  
  useEffect(()=>{
    axios
      .get('')
      .then(res=>{
        console.log('MyClasses get RES', res)
        
      })
      .then(err=>{console.log('MyClasses get ERR', err)})
  }, [])

  // to update the class

  const editHandler = (e) => {
    e.preventDefault()
    axios
      .put('', classes)
      .then(res=>{
        console.log('MyClasses put RES', res)
      })
      .catch(err=>{console.log('MyClasses put ERR', err)
      })
  }

  // to delete a class
  
  const deleteHandler = (e) => {
    axios
      .put('', classes)
      .then(res=>{console.log('MyClasses put RES', res)})
      .catch(err=>{console.log('MyClasses put ERR', err)})
  }

const changeHandler = (e) => {
  setClasses({
    ...classes,
    [e.target.name]: e.target.value
  })
}

  return (
    <div>
      <h1>My Classes</h1>
      <form>
      <label>
          <input 
          type="text"
          name="className"
          value={classes.className}
          onChange={changeHandler}
          placeholder="Class Name"
          />
        </label>
        <label>
          <input 
          type="date"
          name="date"
          value={classes.date}
          onChange={changeHandler}
          placeholder="Date"
          />
        </label>
        <label>
          <input 
          type="time"
          name="time"
          value={classes.time}
          onChange={changeHandler}
          placeholder="Time"
          />
        </label>
        <label>
          <input 
          type="text"
          name="duration"
          value={classes.duration}
          onChange={changeHandler}
          placeholder="Duration"
          />
        </label>
        <label>
          <input 
          type="text"
          name="type"
          value={classes.type}
          onChange={changeHandler}
          placeholder="Type"
          />
        </label>
        <label>
          <input 
          type="text"
          name="location"
          value={classes.location}
          onChange={changeHandler}
          placeholder="Location"
          />
        </label>
        <label>
          <input 
          type="text"
          name="intensity"
          value={classes.intensity}
          onChange={changeHandler}
          placeholder="Intensity Level"
          />
        </label>
        <label>
          <input 
          type="text"
          name="price"
          value={classes.price}
          onChange={changeHandler}
          placeholder="$ Price"
          />
        </label>
        <label>
          <input 
          type="text"
          name="maxSize"
          value={classes.maxSize}
          onChange={changeHandler}
          placeholder="Max Class Size"
          />
        </label>
        <label> 
          <input 
          type="text"
          name="attendees"
          value={classes.attendees}
          onChange={changeHandler}
          placeholder="Number of Attendees"
          />
        </label>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </form>
    </div>
  )
}

export default MyClasses