import { combineReducers } from 'redux'

const displayItemReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_DISPLAY' : 
            console.log(action);
            return action.payload
        
        default : 
            return state
    }
}

export default combineReducers({
    displayItems : displayItemReducer
})