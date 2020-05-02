import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import './AppHeader.css';
import { withRouter } from 'react-router-dom';

class AppHeader extends React.Component {

    state = { activeItem: '' }

    handleItemClick = (e, {name, linkto}) => {
        this.setState({activeItem : name})
        this.props.history.push(linkto)        
    };        

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
                            linkto='explore-movies'
                            active={activeItem === 'movies'}
                            onClick={this.handleItemClick}
                            color='green'                            
                        />
                        <Menu.Item                                    
                            name='TV Shows'
                            linkto='explore-shows'
                            active={activeItem === 'TV Shows'}
                            onClick={this.handleItemClick}
                            color='green'
                        />
                </Menu>
            </div>
        )
    }

}

export default withRouter(AppHeader)