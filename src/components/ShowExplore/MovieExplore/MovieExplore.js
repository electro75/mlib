import React from 'react';
import DisplayItems from '../../DisplayItems/DisplayItems';
import { connect } from 'react-redux';

import {getItems} from '../../../actions';

class MovieExplore extends React.Component {     

    componentDidMount() {
        console.log(this.props.selectedGenre);
        this.props.getItems('movie', this.props.selectedGenre)
    }

    render() {    
        return (                        
            <DisplayItems displayItems={this.props.movieDiscover} />                                    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieDiscover : state.movieDiscover,
        selectedGenre : state.selectedGenre
    }
}

export default connect(mapStateToProps, {getItems})(MovieExplore)