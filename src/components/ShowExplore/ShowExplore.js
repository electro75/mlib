import React from 'react';
import './ShowExplore.css'
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import MovieExplore from './MovieExplore/MovieExplore';
import TvExplore from './TvExplore/TvExplore';
import GenreFilter from './GenreFilter/GenreFilter';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllGenres} from '../../actions';

const ShowExplore = (props)=> {
    
    const path = useLocation().pathname;
    let item = (path === '/explore-shows') ? 'tv' : 'movie'; 

    props.getAllGenres();

    return (
        <Segment basic padded className="explore-content" >
            <div className="discover-display" >
                <Route path='/explore-movies' exact component={MovieExplore} />
                <Route path='/explore-shows' exact component={TvExplore} />    
            </div>
            <div className="filter-btn" >
                <GenreFilter item={item}/>
            </div>
        </Segment> 
    )
}

    


export default connect(null, {getAllGenres})(ShowExplore);