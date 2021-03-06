import React from 'react';
import {connect} from 'react-redux';
import CardImage from './CardImage';
import {withRouter} from 'react-router-dom'
import './DisplayCard.css';

class DisplayCard extends React.Component {

    getImage () {
        const {item, config} = this.props;
        
        if(config && item.poster_path) {
            let str = `${config.base_url}${config.poster_sizes[(config.poster_sizes.length -3)]}${item.poster_path}`;
            return (                                                                    
                <CardImage image={str} overview={item.overview} />
            )
        }  else if(config && item.profile_path) {            
            let str = `${config.base_url}${config.poster_sizes[(config.poster_sizes.length -3)]}${item.profile_path}`;

            return (
                <CardImage image={str} />
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
        if(this.props.item.release_date) {
            let date = this.props.item.release_date ? new Date(this.props.item.release_date).getFullYear() : 
                    new Date(this.props.item.first_air_date).getFullYear();

            return date;
        } else return null        
    }

    getVoteAverage() {
        if(this.props.item.vote_average) {
            return (
                <div>
                    <i className="star icon green"></i>
                        {this.props.item.vote_average}/10
                </div>
                
            )
        } else {
            return null
        }
    }

    getVoteCount() {
        if(this.props.item.vote_count) {
            return (
                <div>
                        <i className="users icon green"></i>
                        {this.props.item.vote_count}
                    </div>
            )
        } else {
            return null
        }
    }

    redirectToDetails() {         
        this.props.history.push(`/details/${this.props.type}/${this.props.item.id}`)
    }

    render() {        

        return (            
                <div 
                    className="ui card card__self" 
                    style={{cursor : 'pointer'}}
                    onClick={() => {this.redirectToDetails()}} >
                    <div className="image">
                        {this.getImage()}
                    </div>
                    <div className="content">
                        <p className="header" > {this.getName()} </p>
                        <div className="meta">
                            <span>{this.getDate()}</span>
                        </div>                    
                    </div> 
                    <div className="extra card__footer">
                        { this.getVoteAverage() }
                        { this.getVoteCount() }                    
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

export default withRouter(connect(mapStateTOProps)(DisplayCard));