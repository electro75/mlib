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
    
    getGenres() {
        if(this.state.data.genres) {
            return this.state.data.genres.map(genre => {
                return (
                    <div className="genre__pill" key={genre.id} >{genre.name}</div>
                )
            })
        }
        else 
        return null
    }

    getPosterPic(details) {
        if(details.poster_path) {
            return (
                <img src={`${this.props.imageConfig.base_url}original${details.poster_path}`} alt='poster' className="detail-image"/>
            )
        } else if(details.profile_path) {
            return <img src={`${this.props.imageConfig.base_url}original${details.profile_path}`} alt='poster' className="detail-image"/>
        }
        
    }

    render() {        
        if(this.state.isData && this.props.imageConfig) {            
            let details = this.state.data
            console.log(details);
            return (
                <div className='main-container'>
                    <div className='main-bg' style={{backgroundImage : `url(${this.props.imageConfig.base_url}${this.props.imageConfig.backdrop_sizes[2]}${this.state.data.backdrop_path})`,
                        backgroundPosition:'center top', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
                        <div className='fake-bg' >
                            <div className='header-container'>
                                <div className='image-card' >
                                    {this.getPosterPic(details)}
                                </div>
                                <div className='header-details' >
                                    <div className="title-container sub__container">
                                        <h2 className="header__title" >{this.state.data.name || this.state.data.title}</h2>
                                    </div>
                                    <div className="pill__container sub__container">
                                        {this.getGenres()}
                                    </div>
                                    <div className="overview__container sub__container" >
                                        {this.state.data.overview}
                                    </div>
                                    <div className="detail__container sub__container" >
                                        
                                    </div>
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