import { ADD_FAILURE, ADD_START, ADD_SUCCESS, FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from "../actions"

const initialState = {
    username: '',
    password: '',
    classes: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                classes: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case ADD_START:
            return {
                ...state,
                loading: true,
            }
        case ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                classes: action.payload
            }
        case ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state 
    }
}

export default reducer