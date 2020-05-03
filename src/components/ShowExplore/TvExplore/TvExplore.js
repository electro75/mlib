import React from 'react';
import DisplayItems from '../../DisplayItems/DisplayItems';
import { connect } from 'react-redux';

import {getItems} from '../../../actions';

class TvExplore extends React.Component {

    componentDidMount() {
        console.log(this.props.selectedGenre);
        this.props.getItems('tv', this.props.selectedGenre, 1)
    }    

    render() {        
        return (
            <DisplayItems displayItems={this.props.tvShowDiscover} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tvShowDiscover : state.tvShowDiscover,
        selectedGenre : state.selectedGenre
    }
}

export default connect(mapStateToProps, {getItems})(TvExplore)