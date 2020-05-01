import React from 'react';
import {connect} from 'react-redux';
import {getItems} from '../../actions';

class DisplayItems extends React.Component {

    componentDidMount() {                
        this.props.getItems(this.props.item)
    }

    render() {                
        return <div>{this.props.item}</div>
    }
}

const mapStateToProps = ({displayItems}) => {
    return displayItems
}

export default connect(mapStateToProps, {getItems})(DisplayItems);