import { combineReducers } from 'redux'

const displayItemReducer = (state={}, action) => {
    switch(action.type) {
        case 'FETCH_DISPLAY' :                    
            return {...action.payload}
        
        default : 
            return state
    }
}

const configReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_CONFIG' : 
            return action.payload

        default : 
            return state
    }
}

export default combineReducers({
    displayItems : displayItemReducer,
    config : configReducer
})