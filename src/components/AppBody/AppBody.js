import React from 'react';
import './AppBody.css'
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';

const AppBody = () => {
    return (        
        <div className="app-body" >
            <Sidebar.Pushable as={Segment} >
                <Sidebar                     
                    visible                                       
                 >
                    <Segment basic>
                        sidebar
                    </Segment>
                    
                </Sidebar>
            
            <Sidebar.Pusher>
                <Segment basic >
                    <Header as='h3' >Movies</Header>
                </Segment>
            </Sidebar.Pusher>            
            </Sidebar.Pushable>            
        </div>            
    )
}

export default AppBody;