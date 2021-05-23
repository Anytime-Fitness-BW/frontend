import axios from 'axios'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAILURE = "ADD_FAILURE"

export const fetchClasses = () => {
    return dispatch => {
        dispatch({type: FETCH_START})
    
    axios
        .get(`https://anytime-fitness-bw.herokuapp.com/`)
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_FAILURE, payload: err.message})
        })
    }
}

export const addClasses = (addedClasses) => {
    return dispatch => {
        dispatch({type: ADD_START})

    axios
        .post(`https://anytime-fitness-bw.herokuapp.com/`, addedClasses)
        .then(res => {
            dispatch({type: ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ADD_FAILURE, payload: err.message})
        })
    }
}
