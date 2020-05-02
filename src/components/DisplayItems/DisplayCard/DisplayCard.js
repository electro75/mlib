import React from 'react';
import {connect} from 'react-redux';
import CardImage from './CardImage';

class DisplayCard extends React.Component {

    getImage () {
        const {item, config} = this.props;
        if(config) {
            let str = `${config.base_url}${config.poster_sizes[(config.poster_sizes.length -3)]}${item.poster_path}`;
            return (                                                                    
                <CardImage image={str} overview={item.overview} />
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

    getDate() {
        let date = this.props.item.release_date ? new Date(this.props.release_date).getFullYear() : 
                    new Date(this.props.item.first_air_date).getFullYear();

        return date;
    }

    render() {
        const {item} = this.props;        
        console.log(item);
        return (
            <div className="ui card" style={{cursor : 'pointer'}} >
                <div className="image">
                    {this.getImage()}
                </div>
                <div className="content">
                    <p className="header" > {this.getName()} </p>
                    <div className="meta">
                        <span>{this.getDate()}</span>
                    </div>                    
                </div> 
                <div className="extra content">
                    <i className="star icon green"></i>
                    {item.vote_average}/10
                    <div className="right floated">
                        <i className="users icon green"></i>
                        {item.vote_count}
                    </div>
                    
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