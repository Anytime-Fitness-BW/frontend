import React from 'react'

const ClassesMap = (props) => {
const {aClass} = props

    return (
            <div>
            <p>Class: {aClass.name}</p>
            <p>Type: {aClass.type}</p>
            <p>Time: {aClass.startTime}</p>
            <p>Duration: {aClass.duration}</p>
            <p>Intensity: {aClass.intensity}</p>
            <p>Location: {aClass.location}</p>
            <p>Registered Attendees: {aClass.numberOfRegisteredAttendees}</p>
            <p>Max Attendees: {aClass.maxClassSize}</p>
            {/* <button onClick={handleEdit}>Edit</button>
            <button onClick={deleteHandler}>Delete</button> */}
          </div>
    )
}    
export default ClassesMap