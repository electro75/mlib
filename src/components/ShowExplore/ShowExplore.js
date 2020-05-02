import React from 'react';
import './ShowExplore.css'
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import MovieExplore from './MovieExplore/MovieExplore';
import TvExplore from './TvExplore/TvExplore';

class ShowExplore extends React.Component {    

    render() {
        return (
            <Segment basic padded className="explore-content" >
                <div className="discover-display" >
                    <Route path='/explore-movies' exact component={MovieExplore} />
                    <Route path='/explore-shows' exact component={TvExplore} />    
                </div>
                <div className="filter-btn" >
                    <button className="ui circular raised green large button">
                        <i className="filter icon"></i>
                        Filter
                    </button>
                </div>
            </Segment> 
        )
    }
    
}

export default ShowExplore;