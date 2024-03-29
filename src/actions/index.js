import tmdb from '../api/tmdb';
import _ from 'lodash';
import axios from 'axios';

const params = {
    api_key : process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_API_KEYS : process.env.apiKey
}

export const getItems = (item, genre, page) => dispatch => _fetchItem(item, genre, page, dispatch);

export const getConfig = () => dispatch => _fetchConfig(dispatch);

export const getItemGenres = (item) => dispatch => _fetchGenres(item, dispatch);

export const getAllGenres = (item) => dispatch => _allGenres(dispatch)

export const getSearch = (query, page) => dispatch => fetchSearchReults(query, page, dispatch)

export const incPage = (item) => async (dispatch, getState) => {

    let genre = getState().selectedGenre 

    let page = getState().currentPage + 1;

    dispatch(getItems(item, genre, page))

    dispatch({type : 'PAGE_CHANGE', payload : page})
}

export const incSearchPage = (query) => async (dispatch, getState) => {

    let page = getState().currentPage + 1;

    dispatch({type : 'PAGE_CHANGE', payload : page})

    fetchSearchReults(query, page, dispatch);
}

export const toggleLoader = (bool) => {
    return {type : 'TOGGLE_LOADER', payload : bool}
}

export const setSingleGenre = (item, genre) => async dispatch => {

    dispatch(getItems(item, genre, 1))

    dispatch({type: 'GENRE_CHANGE', payload : genre})
}

export const searchInit = () => {
    return {
        type : 'INIT_SEARCH'
    }
}

function getsubGenre(item) {
    return tmdb.get(`/genre/${item}/list`, {params})
}

const _allGenres = _.memoize(async (dispatch) => {
    const response = await axios.all([
       getsubGenre('movie'), getsubGenre('tv')
    ])    

    let res = _.uniqWith([...response[0].data.genres, ...response[1].data.genres], _.isEqual)
    
    dispatch({type : 'ALL_GENRES', payload : res })
})

const _fetchGenres = async (item, dispatch) => {
    const response = await tmdb.get(`/genre/${item}/list`, {params})    

    dispatch({type : 'FETCH_GENRES', payload : response.data})
}

const _fetchItem = async (item, genre, page, dispatch) => {    
    const response = await tmdb.get(`/discover/${item}?api_key=${params.api_key}&with_genres=${genre}&page=${page}`);    

    let type = item === 'movie' ? (page > 1) ? 'ADD_MOVIES' : 'FETCH_MOVIES' : (page >1) ?'ADD_TVSHOWS' : 'FETCH_TVSHOWS';

    if(page === 1) {
        dispatch({type : 'PAGE_CHANGE', payload : 1})
    }

    dispatch({type, payload: response.data})
}

const fetchSearchReults = async (query, page, dispatch) => {
    const response = await tmdb.get(`/search/multi?api_key=${params.api_key}&query=${query}&page=${page}`);

    dispatch({ type: 'TOGGLE_LOADER', payload : false })

    if(page === 1) {
        dispatch({type : 'FETCH_SEARCH', payload:response.data})
        dispatch({type : 'PAGE_CHANGE', payload : 1})
    } else {
        dispatch({type : 'ADD_SEARCH', payload:response.data})
    }

    
}

const _fetchConfig = _.memoize(async (dispatch) => {
    const response = await tmdb.get('/configuration', {params});

    dispatch({type: 'FETCH_CONFIG', payload: response.data})
})