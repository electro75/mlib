import React from 'react';
import DisplayItems from '../../DisplayItems/DisplayItems';
import { connect } from 'react-redux';

import {getItems} from '../../../actions';

class MovieExplore extends React.Component {
          
    componentDidMount() {                
        this.props.getItems('movie', this.props.selectedGenre, 1)
        
    }

    render() {        
        return (                        
            <DisplayItems displayItems={this.props.movieDiscover} itemDisplay='movie' />                                    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieDiscover : state.movieDiscover,
        selectedGenre : state.selectedGenre,
        currentPage : state.currentPage
    }
}

export default connect(mapStateToProps, {getItems})(MovieExplore)