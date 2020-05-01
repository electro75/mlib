import React from 'react';
import './ShowExplore.css'
import { Sidebar, Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DisplayItems from '../DisplayItems/DisplayItems';

const ShowExplore = () => {
    return (        
        <div className="app-body" >
            <Sidebar.Pushable as={Segment} >
                <Sidebar visible >
                    <Segment basic>
                        sidebar
                    </Segment>
                </Sidebar>            
                <Sidebar.Pusher>
                    <Segment basic padded>                                                                    
                            <Route path='/explore-movies' exact render={() => <DisplayItems item='movie' /> } />
                            <Route path='/explore-shows' exact render={() => <DisplayItems item='tv' /> } />                                                
                    </Segment>
                </Sidebar.Pusher>            
            </Sidebar.Pushable>
        </div>            
    )
}

export default ShowExplore;