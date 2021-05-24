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


  // a list of classes to choose from
    axios
      .get('')
      .then(res=>{
        console.log("AddClass get RES", res)
      })
      .catch(err=>{
        console.log("AddClass get ERR", err)
      })
    
  // adds the class    
    axios
      .post('', classes)
      .then(res=>{
        console.log("AddClass post RES", res)
      })
      .catch(err=>{
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
      <form onSubmit={handleSubmit}>
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
          value={classes.confirm}
          onChange={changeHandler}
          />
        </label>
      </form>
    </div>
  )
}

export default AddClass