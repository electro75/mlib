import tmdb from '../api/tmdb';
import _ from 'lodash';
import keys from '../config/keys';

const params = {
    api_key : keys.apiKey
}

export const getItems = (item) => dispatch => _fetchItem(item, dispatch);

export const getConfig = () => dispatch => _fetchConfig(dispatch);

export const getItemGenres = (item) => dispatch => _fetchGenres(item, dispatch);


const _fetchGenres = async (item, dispatch) => {
    const response = await tmdb.get(`/genre/${item}/list`, {params})    

    dispatch({type : 'FETCH_GENRES', payload : response.data})
}

const _fetchItem = async (item, dispatch) => {
    const response = await tmdb.get(`/discover/${item}`, {params});

    dispatch({type: 'FETCH_DISPLAY', payload: response.data})
}

const _fetchConfig = async (dispatch) => {
    const response = await tmdb.get('/configuration', {params});

    dispatch({type: 'FETCH_CONFIG', payload: response.data})
}