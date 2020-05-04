import { combineReducers } from 'redux'

const moviesReducer = (state={}, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES' :                          
            return {...action.payload}

        case 'ADD_MOVIES' :
                        
            return {
                ...state,
                results : [...state.results, ...action.payload.results]
            }
        
        default : 
            return state
    }
}

const tvShowReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TVSHOWS' :
            return {...action.payload}

        case 'ADD_TVSHOWS' : 
            return {
                ...state,
                results : [...state.results, ...action.payload.results]
            }
        
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
            return action.payload
        
        default :
            return state
    }
}

const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'PAGE_CHANGE' :
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
    selectedGenre : singleGenreReducer,
    currentPage : pageReducer 
})