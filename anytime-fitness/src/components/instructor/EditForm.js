import React from 'react'

const EditForm = (props) => {
    const {classes, changeHandler, editHandler} = props
    
    return (
        <div>
           <form onsubmit={editHandler}>
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
                        placeholder="Registered Attendees"
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
                {/* <button type="submit">Update</button> */}
      </form> 
        </div>
    )
}

export default EditForm
