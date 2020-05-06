import React from 'react';
import './ItemSearch.css';
import DisplayItems from '../DisplayItems/DisplayItems';
import { connect } from 'react-redux';
import { toggleLoader, getSearch } from '../../actions';

class ItemSearch extends React.Component {   
    
    getResults = (e) => {
        if(e.key === 'Enter') {

            this.props.toggleLoader(true);        
            this.props.getSearch(e.target.value, 1)
        }
        
    }

    render() {
        return (
            <div>
                <div className='ui segment padded basic' >
                    <div className='ui grid' >
                        <div className='five wide column' ></div>
                        <div className='six wide column' >
                            <div className={`ui massive icon input transparent ${this.props.isLoading ? 'loading' : ''}`}
                                 style={{width : '100%'}} >
                                <input 
                                    type="text" 
                                    disabled = {this.props.isLoading}
                                    placeholder="Search movies, celebrities, shows...." 
                                    className='search-input'
                                    onKeyPress={this.getResults}
                                    />
                                <i className="search green link icon"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='ui segment basic padded result-container' >
                    <DisplayItems  displayItems = {this.props.searchResults}/>
                </div>
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    console.log(state.searchResults);
    return {
        searchResults : state.searchResults,
        isLoading : state.loaderState
    }

}

export default connect(mapStateToProps, { toggleLoader, getSearch })(ItemSearch);