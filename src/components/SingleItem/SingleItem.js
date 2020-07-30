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
            console.log(this.state.data);
            let details = this.state.data                        
            return (
                <div className='main-container'>
                    <div className='main-bg' style={{backgroundImage : `url(${this.props.imageConfig.base_url}${this.props.imageConfig.backdrop_sizes[2]}${this.state.data.backdrop_path})`,
                        backgroundPosition:'center top', backgroundRepeat:'no-repeat'}} >
                        <div className='fake-bg' >
                            <div className='header-container'>
                                <div className='image-card' >
                                <img src={`${this.props.imageConfig.base_url}original${details.poster_path}`} alt='poster' className="detail-image"/>
                                </div>
                                <div className='header-details' >
                                    <h1>{this.state.data.name || this.state.data.title}</h1>
                                    {this.state.data.overview}
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="item-details" >
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
    return {
        imageConfig : state.config.images
    }
}

export default connect(mapStateToProps)(SingleItem)