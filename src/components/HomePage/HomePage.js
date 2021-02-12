import React from 'react';
import {useHistory} from 'react-router-dom'
import './HomePage.css';


const HomePage = () => {    

    const history = useHistory();

    return (
        <div className="home-page" >
            <div className="home-page-banner" >
                <div className="text-container" >
                    <h1 className="title-name" >MTVLIB</h1>
                    <p>Find your next binge here.</p>
                </div>
            </div>
            <div className="explore-banner m-banner" >
                <div className="banner-cover" >
                    <div className="explore-btn" onClick={() => history.push('/explore/movies')} >
                        Explore Movies
                    </div>
                </div>
                
            </div>
            <div className="explore-banner t-banner" >
                <div className="banner-cover" >
                    <div className="explore-btn" onClick={() => history.push('/explore/shows')}>
                        Explore TV
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;