import React, { useState } from 'react'

const EditForm = (props) => {
    const {aClass, editHandler} = props
    
    const [classToEdit, setClassToEdit] = useState({
        id: aClass.id,
        name: aClass.name,
        startTime: aClass.startTime,
        duration: aClass.duration,
        type: aClass.type,
        location: aClass.location,
        intensity: aClass.intensity,
        numberOfRegisteredAttendees: aClass.numberOfRegisteredAttendees,
        maxClassSize: aClass.maxClassSize, 
    })

    const changeHandler = (e) => {
        setClassToEdit({
            ...classToEdit,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
           <form onSubmit={(e)=>editHandler(e, classToEdit)}>
                <h4 className='sort-by'>Sort By: </h4>
                <div className='filter-bar'>
                    <label>
                    <input
                        className='filter-bar'
                        type="text"
                        name="name"
                        value={classToEdit.name}
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
                        value={classToEdit.type}
                        onChange={changeHandler}
                        placeholder="Type"
                        style={{backgroundColor: 'lightgray'}}
                    />
                    </label>
                    <label>
                    <input
                        className='filter-bar'
                        type="text"
                        name="startTime"
                        value={classToEdit.startTime}
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
                        value={classToEdit.duration}
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
                        value={classToEdit.intensity}
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
                        value={classToEdit.location}
                        onChange={changeHandler}
                        placeholder="Location"
                        style={{backgroundColor: 'lightgray'}}
                    />
                    </label>
                    <label>
                    <input
                        className='filter-bar'
                        type="text"
                        name="numberOfRegisteredAttendees"
                        value={classToEdit.numberOfRegisteredAttendees}
                        onChange={changeHandler}
                        placeholder="Registered Attendees"
                        style={{backgroundColor: 'lightgray'}}
                    />
                    </label>
                    <label>
                    <input
                        className='filter-bar'
                        type="text"
                        name="maxClassSize"
                        value={classToEdit.maxClassSize}
                        onChange={changeHandler}
                        placeholder="Max Attendees"
                        style={{backgroundColor: 'lightgray'}}
                    />
                    </label>
                </div>
                <button type="submit">Update</button>
      </form> 
        </div>
    )
}

export default EditForm
