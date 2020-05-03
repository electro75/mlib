import tmdb from '../api/tmdb';
import _ from 'lodash';
import keys from '../config/keys';
import axios from 'axios';

const params = {
    api_key : keys.apiKey
}

export const getItems = (item, genre) => dispatch => _fetchItem(item, genre, dispatch);

export const getConfig = () => dispatch => _fetchConfig(dispatch);

export const getItemGenres = (item) => dispatch => _fetchGenres(item, dispatch);

export const getAllGenres = (item) => dispatch => _allGenres(dispatch)


function getsubGenre(item) {
    return tmdb.get(`/genre/${item}/list`, {params})
}

const _allGenres = async (dispatch) => {
    const response = await axios.all([
       getsubGenre('movie'), getsubGenre('tv')
    ])

    console.log(response);

    let res = _.uniqWith([...response[0].data.genres, ...response[1].data.genres], _.isEqual)
    

    dispatch({type : 'ALL_GENRES', payload : res })
}

const _fetchGenres = async (item, dispatch) => {
    const response = await tmdb.get(`/genre/${item}/list`, {params})    

    dispatch({type : 'FETCH_GENRES', payload : response.data})
}

const _fetchItem = async (item, genre, dispatch) => {    
    const response = await tmdb.get(`/discover/${item}?api_key=${keys.apiKey}&with_genres=${genre}`);

    let type = item === 'movie' ? 'FETCH_MOVIES' : 'FETCH_TVSHOWS';

    dispatch({type, payload: response.data})
}

const _fetchConfig = _.memoize(async (dispatch) => {
    const response = await tmdb.get('/configuration', {params});

    dispatch({type: 'FETCH_CONFIG', payload: response.data})
})