import React from 'react';
import './ShowExplore.css'
import { Route } from 'react-router-dom';

import MovieExplore from './MovieExplore/MovieExplore';
import TvExplore from './TvExplore/TvExplore';
import GenreFilter from './GenreFilter/GenreFilter';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getAllGenres, incPage} from '../../actions';

const ShowExplore = (props)=> {
    
    const path = useLocation().pathname;
    let item = (path === '/explore-shows') ? 'tv' : 'movie'; 

    props.getAllGenres();

    const handleScroll = (e) => {        
        let element = e.target; 
                
        
        if(element.scrollHeight - element.scrollTop === element.clientHeight) {            

            props.incPage(item);
        }
    }

    return (
        <div className='ui explore-content' onScroll={handleScroll} >
            <div className="discover-display" >
                <Route path='/explore-movies' exact component={MovieExplore} />
                <Route path='/explore-shows' exact component={TvExplore} />    
            </div>
            <div className="filter-btn" >
                <GenreFilter item={item}/>
            </div>
        </div> 
    )
}

export default connect(null, {getAllGenres, incPage})(ShowExplore);