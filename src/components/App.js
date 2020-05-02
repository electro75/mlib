import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppHeader from './AppHeader/AppHeader';
import { connect } from 'react-redux';
import {getConfig} from '../actions';
import './App.css';
import ShowExplore from './ShowExplore/ShowExplore';

class App extends React.Component {

    componentDidMount() {
        this.props.getConfig();
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-container' >
                <AppHeader />
                <ShowExplore />
                </div>
            </BrowserRouter>
        )
    }    
}


export default connect(null, { getConfig })(App);