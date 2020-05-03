import React from 'react';
import DisplayItems from '../../DisplayItems/DisplayItems';
import { connect } from 'react-redux';

import {getItems} from '../../../actions';

class TvExplore extends React.Component {

    componentDidMount() {
        this.props.getItems('tv', '')
    }

    render() {
        return (
            <DisplayItems displayItems={this.props.tvShowDiscover} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tvShowDiscover : state.tvShowDiscover
    }
}

export default connect(mapStateToProps, {getItems})(TvExplore)