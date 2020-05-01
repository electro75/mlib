import tmdb from '../api/tmdb';
import _ from 'lodash';
import keys from '../config/keys';

export const getItems = (item) => dispatch => {    
    return _fetchItem(item, dispatch)
};

const _fetchItem = _.memoize(async (item, dispatch) => {
    const response = await tmdb.get(`/discover/${item}`, {params : {api_key : keys.apiKey}});

    dispatch({type: 'FETCH_DISPLAY', payload: response.data})
})