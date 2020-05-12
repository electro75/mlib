import React from 'react';
import {connect} from 'react-redux';
import tmdb from '../../api/tmdb';
import keys from '../../config/keys';
import './SingleItem.css';

class SingleItem extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isData : false
        }
    }

    async getDetails(type, id) {    
        const response = await tmdb.get(`/${type}/${id}?api_key=${keys.apiKey}&append_to_response=recommendations,videos,credits`)        
        if(response.status === 200) {
            this.setState({
                isData : true,
                data : response.data
            })
        }        
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const {type, id} = params

        this.getDetails(type, id)
    }

    getImage() {
        return 
    }

    render() {
        if(this.state.isData && this.props.imageConfig) {
            let details = this.state.data            
            return (
                <div className='main-container'>                    
                    Single Item
                </div>
                    
            )
        } else {
            return <div>fetching...</div>
        }
        
    }
}

const mapStateToProps = (state) => {     
    return {
        imageConfig : state.config.images
    }
}

export default connect(mapStateToProps)(SingleItem)