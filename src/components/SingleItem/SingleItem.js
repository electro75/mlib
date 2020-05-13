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

    render() {        
        if(this.state.isData && this.props.imageConfig) {
            let details = this.state.data            
            console.log(details);
            return (
                <div className='main-container'>
                    <div className='main-bg' style={{backgroundImage : `url(${this.props.imageConfig.base_url}${this.props.imageConfig.backdrop_sizes[2]}${this.state.data.backdrop_path})`,
                        backgroundPosition:'center top', backgroundRepeat:'no-repeat'}} >
                        <div className='fake-bg' >
                            <div className='header-container'>
                                <div className='image-card' >
                                    <div className='ui card' >
                                        <div className='image' >
                                            <img src={`${this.props.imageConfig.base_url}original${details.poster_path}`} alt='poster'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='header-details' >
                                    
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div>
                        display details here
                    </div>              
                </div>
                
            )
        } else {
            return <div>fetching...</div>
        }
        
    }
}

const mapStateToProps = (state) => {     
    console.log(state.config.images);
    return {
        imageConfig : state.config.images
    }
}

export default connect(mapStateToProps)(SingleItem)