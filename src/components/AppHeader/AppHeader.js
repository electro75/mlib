import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import './AppHeader.css';
import { withRouter } from 'react-router-dom';

class AppHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            activeItem: this.getPath(),
        }
    }

    getPath() {        
        switch(this.props.location.pathname) {
            case '/explore/movies' : 
                return 'movies'

            case '/explore/shows' :
                return 'TV Shows'
            
            case '/search' : 
                return 'search'

            default :
                return 'movies'
        }
    }

    

    handleItemClick = (e, {name, linkto}) => {
        this.setState({activeItem : name})
        this.props.history.push(linkto)        
    };        

    render() {
        const {activeItem} = this.state;

        return (
            <div className="app-header__container" >
                <Menu 
                    size='massive'                         
                    pointing 
                    secondary 
                    color='green'                                                                              
                    >                           
                        <Menu.Item 
                            header 
                            className='__menu-header menu-item'
                            linkto='/'>
                            <Icon name='monero' color='green' size='large' />
                                <span style={{color:'#16AB39'}} > MTVLIB </span> 
                        </Menu.Item>                            
                        <Menu.Item
                            name='movies'                            
                            linkto='/explore/movies'
                            className='menu-item'
                            active={activeItem === 'movies'}
                            onClick={this.handleItemClick}
                            color='green'                            
                        />
                        <Menu.Item                                    
                            name='TV Shows'                            
                            linkto='/explore/shows'
                            className='menu-item'
                            active={activeItem === 'TV Shows'}
                            onClick={this.handleItemClick}
                            color='green'
                        />
                        <Menu.Item 
                            name='search'                            
                            position='right'
                            onClick={this.handleItemClick}
                            active={activeItem === 'search'}
                            linkto='/search'
                            className='menu-item'                            
                        >
                            <Icon name='search' />
                            Search
                        </Menu.Item>
                </Menu>
            </div>
        )
    }

}

export default withRouter(AppHeader)