import { combineReducers } from 'redux'

const init = (state = {}, action) => {
    switch(action.type){
        default:
            return {...state}
    }
}

export default combineReducers({
    init
})