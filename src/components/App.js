import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppHeader from './AppHeader/AppHeader';

import './App.css';
import ShowExplore from './ShowExplore/ShowExplore';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-container' >
            <AppHeader />
            <ShowExplore />
            </div>
        </BrowserRouter>
    )
}


export default App;