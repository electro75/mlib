import React from 'react';
import './ItemSearch.css';

class ItemSearch extends React.Component {

    state = {
        isLoading : false
    }

    triggerLoad() {
        this.setState({
            isLoading : true
        })
    }

    render() {
        return (
            <div>
                <div className='ui segment padded basic' >
                    <div className='ui grid' >
                        <div className='five wide column' ></div>
                        <div className='five wide column' >
                            <div className={`ui big icon input transparent ${this.state.isLoading ? 'loading' : ''}`}
                                 style={{width : '100%'}} >
                                <input 
                                    type="text" 
                                    placeholder="Search movies, celebrities, shows...." 
                                    className='search-input'/>
                                <i className="search green link icon"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='ui segment padded' >
                    Search results
                </div>
            </div>
        )
    }    
}

export default ItemSearch;