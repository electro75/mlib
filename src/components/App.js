import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AppHeader from './AppHeader/AppHeader';
import { connect } from 'react-redux';
import {getConfig} from '../actions';
import './App.css';
import ShowExplore from './ShowExplore/ShowExplore';
import ItemSearch from './ItemSearch/ItemSearch';
import HomePage from './HomePage/HomePage';
import SingleItem from './SingleItem/SingleItem';

class App extends React.Component {

    componentDidMount() {
        this.props.getConfig();
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-container' >
                <AppHeader />
                <Route path = '/explore' component={ShowExplore}/>
                <Route path ='/' component={HomePage} />
                <Route path = '/search' component={ItemSearch} />
                <Route path = '/details/:type/:id' component = {SingleItem} />
                </div>
            </BrowserRouter>
        )
    }    
}


export default connect(null, { getConfig })(App);