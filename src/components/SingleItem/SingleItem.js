import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux'


class SingleItem extends React.Component {


    componentDidMount() {
        const { match: { params } } = this.props;

        console.log(params);
        // call getDetails API.
    }

    render() {        
        return <div>Single Item</div>
    }
}

export default connect()(SingleItem)