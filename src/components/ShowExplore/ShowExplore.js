import React from 'react';
import './ShowExplore.css'
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DisplayItems from '../DisplayItems/DisplayItems';

class ShowExplore extends React.Component {    

    render() {
        // return (                    
        //     <Sidebar.Pushable>
        //         <Segment basic>
        //             {/* <Sidebar visible  className="app-sidebar" >
        //                 <Segment basic>
        //                     sidebar                            
        //                 </Segment>
        //             </Sidebar>             */}
        //             <Sidebar.Pusher className="explore-content" >                        
        //                 <Segment basic padded>
        //                     <Route path='/explore-movies' exact render={() => <DisplayItems item='movie' /> } />
        //                     <Route path='/explore-shows' exact render={() => <DisplayItems item='tv' /> } />
        //                 </Segment>                                        
        //             </Sidebar.Pusher>
        //         </Segment>                    
        //     </Sidebar.Pushable>            
        // )

        return (
            <Segment basic padded className="explore-content" >
                <Route path='/explore-movies' exact render={() => <DisplayItems item='movie' /> } />
                <Route path='/explore-shows' exact render={() => <DisplayItems item='tv' /> } />
            </Segment> 
        )
    }
    
}

export default ShowExplore;