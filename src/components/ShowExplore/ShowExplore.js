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
                <Route path='/explore-movies' exact component={MovieExplore} />
                <Route path='/explore-shows' exact component={TvExplore} />
            </Segment> 
        )
    }
    
}

export default ShowExplore;