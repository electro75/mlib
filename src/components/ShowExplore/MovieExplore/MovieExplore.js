import React from 'react';
import DisplayItems from '../../DisplayItems/DisplayItems';
import { connect } from 'react-redux';

import {getItems} from '../../../actions';

class MovieExplore extends React.Component {

    componentDidMount() {
        this.props.getItems('movie')
    }

    render() {
        return (                        
            <DisplayItems displayItems={this.props.movieDiscover} />                                    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieDiscover : state.movieDiscover
    }
}

export default connect(mapStateToProps, {getItems})(MovieExplore)