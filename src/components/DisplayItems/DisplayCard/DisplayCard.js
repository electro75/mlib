import React from 'react';
import {connect} from 'react-redux';

class DisplayCard extends React.Component {

    getImage () {
        const {item, config} = this.props;
        if(config) {
            let str = `${config.base_url}${config.poster_sizes[(config.poster_sizes.length -3)]}${item.poster_path}`;
            return (                
                <img src={str} />                                    
                
            )
        } else {
            return (
                <div className="ui placeholder">
                    <div className="square image"></div>
                </div>
            )
        }
        
    }

    getName() {
        const {item} = this.props;
        let str = item.name ? item.name : item.title
        return str
    }

    render() {
        const {item, config} = this.props;
        console.log(item, config);

        return (
            <div className="ui card" >
                <div className="image">
                    {this.getImage()}
                </div>
                <div className="content">
                    <a className="header" > {this.getName()} </a>
                </div>
            </div>
        )
    }
    
}

const mapStateTOProps = (state) => {
    return {
        config : state.config.images
    }
}

export default connect(mapStateTOProps)(DisplayCard);