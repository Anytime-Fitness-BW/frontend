import React, { useState } from 'react'

const ClassesMap = ({aClass, setIsEditing, isEditing, deleteHandler}) => {


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
            <button onClick={()=>setIsEditing(!isEditing)}>Edit</button>
            <button onClick={(e)=>deleteHandler(e, aClass.id)}>Delete</button>
          </div>
    )
}    
export default ClassesMap