import React from 'react';
import {Menu, Segment, Icon} from 'semantic-ui-react';

export default class AppHeader extends React.Component {

    state = { activeItem: 'movie' }

    handleItemClick = (e, {name}) => this.setState({activeItem : name});

    render() {

        const {activeItem} = this.state;

        return (
            <div>
                <Segment inverted>
                    <Menu 
                        inverted 
                        pointing 
                        secondary
                        size="large"
                        >
                            <Menu.Item                                
                                children={<Icon size='large' name='monero' />}
                            />   
                            <Menu.Item
                                name='movie'
                                active={activeItem === 'movie'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='tv'
                                active={activeItem === 'tv'}
                                onClick={this.handleItemClick}
                            />

                    </Menu>
                </Segment>
                
            </div>
        )
    }

}