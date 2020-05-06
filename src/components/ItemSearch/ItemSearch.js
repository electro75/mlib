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

    getDisplay() {
        if(this.props.searchResults.status === 'EMPTY') {
            return (
                <div className='empty-state-container' >
                    Results will appear here!
                </div>
            )
        } else {
            return (
                <DisplayItems  displayItems = {this.props.searchResults}/>
            )
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
                                    placeholder="Type something and hit enter" 
                                    className='search-input'
                                    autoFocus
                                    onKeyPress={this.getResults}
                                    />
                                <i className="search green link icon"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='ui segment basic padded result-container' >
                    {this.getDisplay()}                    
                </div>
            </div>
        )
    }    
}

const mapStateToProps = (state) => {    
    return {
        searchResults : state.searchResults,
        isLoading : state.loaderState
    }

}

export default connect(mapStateToProps, { toggleLoader, getSearch })(ItemSearch);