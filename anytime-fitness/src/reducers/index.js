
const initialState = {
    username: '',
    password: '',
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
                loading: false
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: true
            }
        default:
            return state 
    }
}

export default reducer