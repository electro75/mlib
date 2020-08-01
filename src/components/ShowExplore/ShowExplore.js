import React from 'react';
import './ShowExplore.css'
import { Route } from 'react-router-dom';
import MovieExplore from './MovieExplore/MovieExplore';
import TvExplore from './TvExplore/TvExplore';
// import GenreFilter from './GenreFilter/GenreFilter';
import { useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllGenres, incPage} from '../../actions';
import _ from 'lodash';


const ShowExplore = (props)=> {
    
    const path = useLocation().pathname;
    let item = (path === '/explore/shows') ? 'tv' : 'movie'; 

    props.getAllGenres();

    const callAction = _.debounce(() => {
        props.incPage(item);
    }, 1000)

    const handleScroll = (e) => {        
        let element = e.target;                                    
        if((element.scrollHeight - element.scrollTop - element.clientHeight) < 5) {            
            callAction();
        }
        
    }

    return (
        <div className='ui explore-content' onScroll={handleScroll} >
            <div className="discover-display" >                
                <Route path={props.match.url + '/movies'} exact component={MovieExplore} />                                
                <Route path={props.match.url + '/shows'} exact component={TvExplore} />    
            </div>
            {/* <div className="filter-btn" >
                <GenreFilter item={item}/>
            </div> */}
        </div> 
    )
}

export default connect(null, {getAllGenres, incPage})(ShowExplore);