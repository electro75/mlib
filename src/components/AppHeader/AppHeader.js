import React from 'react';
import {Menu, Icon, Header, Label} from 'semantic-ui-react';
import './AppHeader.css';

export default class AppHeader extends React.Component {

    state = { activeItem: 'movies' }

    handleItemClick = (e, {name}) => this.setState({activeItem : name});        

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                                   
                    <Menu 
                        size='massive'                         
                        pointing 
                        secondary 
                        color='green'                       
                        >   
                        
                            <Menu.Item header className='__menu-header'>                                
                                <Icon name='monero' color='green' size='large' />
                                    <span style={{color:'#16AB39'}} > MTVLIB </span> 
                            </Menu.Item>                            
                            <Menu.Item
                                name='movies'
                                active={activeItem === 'movies'}
                                onClick={this.handleItemClick}
                                color='green'
                            />
                            <Menu.Item                                    
                                name='TV Shows'
                                active={activeItem === 'TV Shows'}
                                onClick={this.handleItemClick}
                                color='green'
                            />
                            
                            

                    </Menu>
                
                
            </div>
        )
    }

}