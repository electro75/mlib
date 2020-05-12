import React from 'react';
import {connect} from 'react-redux';
import tmdb from '../../api/tmdb';
import keys from '../../config/keys';


class SingleItem extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {}
    }

    async getDetails(type, id) {    
        const response = await tmdb.get(`/${type}/${id}?api_key=${keys.apiKey}&append_to_response=recommendations,videos,credits`)
        console.log(response.data);
        this.setState = (response.data)
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const {type, id} = params

        this.getDetails(type, id)
    }

    render() {        
        return (
            <div>Single Item</div>
        )
    }
}

export default connect()(SingleItem)