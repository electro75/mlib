import React from 'react';
import './HomePage.css';


const HomePage = () => {    

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
                    <div className="explore-btn" >
                        Explore Movies
                    </div>
                </div>
                
            </div>
            <div className="explore-banner t-banner" >
                <div className="banner-cover" >
                    <div className="explore-btn" >
                        Explore TV
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;