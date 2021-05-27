import React, { useState, useEffect } from 'react'
import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

const initialState = [{
  id: '',
  class_name: '',
  date: '',
  time: '',
  duration: '',
  location: '',
  intensity_level: '',
  registered_attendees: '',
  max_class_size: '',
  first_name: '',
  last_name: '',
  price: '',
  description: '',
}]

const MyClasses = () => {
  const [classes, setClasses] = useState(initialState)
  
  // to access the classes available upon mount
  
  useEffect(()=>{
    axiosWithAuth()
      .get('/api/instructor/class')
      .then(res=>{
        console.log('MyClasses get RES', res)
        setClasses(res.data)
      })
      .then(err=>{console.log('MyClasses get ERR', err)})
  }, [])

  // to update the class

  const editHandler = (e) => {
    e.preventDefault()
    const id = classes.id
    axiosWithAuth()
      .put(`/api/instructor/class${id}`, classes)
      .then(res=>{
        console.log('MyClasses put RES', res)
        // const editClass = classes.filter((aClass) => aClass.id !== id )
        // editClass.push(classes)
        // setClasses(editClass)
      })
      .catch(err=>{console.log('MyClasses put ERR', err)
      })
  }

  // to delete a class
  
  const deleteHandler = (delClass) => {
    axiosWithAuth()
      .delete(`/api/instructor/class${delClass}`, classes)
      .then(res=>{console.log(
        'MyClasses put RES', res)
        // const remainingClasses = classes.filter((aClass) => aClass.id !== Number(res.data))
        // setClasses(remainingClasses)
    })
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
      {classes.map((aClass)=> {
        return<div> 
          <p>{aClass.id}</p>
          <p>{aClass.class_name}</p>
          <p>{aClass.date}</p>
          <p>{aClass.time}</p>
          <p>{aClass.duration}</p>
          <p>{aClass.location}</p>
          <p>{aClass.intensity_level}</p>
          <p>{aClass.registered_attendees}</p>
          <p>{aClass.max_class_size}</p>
          <p>{aClass.first_name}</p>
          <p>{aClass.last_name}</p>
          <p>{aClass.price}</p>
          <p>{aClass.description}</p>
         </div>
      })}
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