import  { ADD_START, ADD_SUCCESS, DELETE_START, DELETE_SUCCESS, EDIT_START, EDIT_SUCCESS, FETCH_START, FETCH_SUCCESS, HANDLE_ERROR } from "../actions"

const initialState = {
    classes: [],
    isFetching: false,
    error: '',
    aClass: {
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
        confirm: false,
        
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error:''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                classes: action.payload,
            }
        case ADD_START:
            return {
                ...state,
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                classes: action.payload,
                aClass: [...state.aClass, action.payload]
            }
        case EDIT_START:
            return {
                ...state,
            }
        case EDIT_SUCCESS:
            return {
                ...state,
                aClass: action.payload
            }
        case DELETE_START:
            return {
                ...state,
            }
        case DELETE_SUCCESS:
            return ({
                ...state,
                classes: state.items.filter((aClass) => {
                    return (aClass.id !== action.payload.id)
                })
            })
        case HANDLE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state 
    }
}

export default reducer