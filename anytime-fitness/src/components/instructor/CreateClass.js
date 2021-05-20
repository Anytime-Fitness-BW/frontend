import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

const CreateClass = () => {
  const [formValues, setFormValues] = useState("")
  const { push } = useHistory()

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
    [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    axios
      .post('', formValues)
      .then(res=>{
        console.log("create post RES",res)
        push('/instructor/classes')
      })
      .catch(err=>{console.log("create post ERR", err)})
  }

  return (
    <div>
      <h1>Create a New Class</h1>
      <form onSubmit={submitHandler}>
        <label>
          <input 
          type="text"
          name="className"
          value={formValues.className}
          onChange={changeHandler}
          placeholder="Class Name"
          />
        </label>
        <label>
          <input 
          type="date"
          name="date"
          value={formValues.date}
          onChange={changeHandler}
          placeholder="Date"
          />
        </label>
        <label>
          <input 
          type="time"
          name="time"
          value={formValues.time}
          onChange={changeHandler}
          placeholder="Time"
          />
        </label>
        <label>
          <input 
          type="text"
          name="duration"
          value={formValues.duration}
          onChange={changeHandler}
          placeholder="Duration"
          />
        </label>
        <label>
          <input 
          type="text"
          name="type"
          value={formValues.type}
          onChange={changeHandler}
          placeholder="Type"
          />
        </label>
        <label>
          <input 
          type="text"
          name="location"
          value={formValues.location}
          onChange={changeHandler}
          placeholder="Location"
          />
        </label>
        <label>
          <input 
          type="text"
          name="intensity"
          value={formValues.intensity}
          onChange={changeHandler}
          placeholder="Intensity Level"
          />
        </label>
        <label>
          <input 
          type="text"
          name="price"
          value={formValues.price}
          onChange={changeHandler}
          placeholder="$ Price"
          />
        </label>
        <label> 
          <input 
          type="checkbox"
          name="confirm"
          id="confirm"
          value={formValues.confirm}
          onChange={changeHandler}
          />
          Check box to confirm class creation
        </label>
        <button type="submit">Create</button>
      </form>

    </div>
  )
}

export default CreateClass