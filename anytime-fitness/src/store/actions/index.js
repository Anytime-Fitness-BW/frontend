import axios from 'axios'

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const ADD_START = "ADD_START"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const EDIT_START = "EDIT_START"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const DELETE_START = "DELETE_START"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const HANDLE_ERROR = "HANDLE_ERROR"


export const fetchClasses = () => {
    return dispatch => {
        dispatch({type: FETCH_START})
    
    axios
        .get(`https://anytime-fitness-bw.herokuapp.com/`)
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: HANDLE_ERROR, payload: err.message})
        })
    }
}

export const addClass = (newClass) => {
    return dispatch => {
        dispatch({type: ADD_START})

    axios
        .post(`https://anytime-fitness-bw.herokuapp.com/`, newClass)
        .then(res => {
            dispatch({type: ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: HANDLE_ERROR, payload: err.message})
        })
    }
}

export const editClass = (newClass) => {
    return dispatch => {
        dispatch({type: FETCH_START})
    
    axios
        .get(`https://anytime-fitness-bw.herokuapp.com/`, newClass)
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: HANDLE_ERROR, payload: err.message})
        })
    }
}

export const deleteClass = (newClass) => {
    return dispatch => {
        dispatch({type: ADD_START})

    axios
        .post(`https://anytime-fitness-bw.herokuapp.com/`)
        .then(res => {
            dispatch({type: ADD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: HANDLE_ERROR, payload: err.message})
        })
    }
}
