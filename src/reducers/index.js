import { combineReducers } from 'redux'

const moviesReducer = (state={}, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES' :       
            console.log('movies')             
            return {...action.payload}
        
        default : 
            return state
    }
}

const tvShowReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TVSHOWS' :
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

const genreReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_GENRES' : 
            return action.payload.genres

        case 'ALL_GENRES' : 
            return action.payload
        
        default : 
            return state
    }
}

const singleGenreReducer = (state = '', action) => {
    switch(action.type) {
        case 'GENRE_CHANGE':
            console.log('genre change');            
            return action.payload
        
        default :
            return state
    }
}


export default combineReducers({
    movieDiscover : moviesReducer,
    tvShowDiscover : tvShowReducer,
    config : configReducer,
    genres  : genreReducer,
    selectedGenre : singleGenreReducer  
})