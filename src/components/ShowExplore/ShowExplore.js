import React from 'react';
import './ShowExplore.css'
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DisplayItems from '../DisplayItems/DisplayItems';

class ShowExplore extends React.Component {    

    render() {        

        return (
            <Segment basic padded className="explore-content" >
                <Route path='/explore-movies' exact render={() => <DisplayItems item='movie' /> } />
                <Route path='/explore-shows' exact render={() => <DisplayItems item='tv' /> } />
            </Segment> 
        )
    }
    
}

export default ShowExplore;