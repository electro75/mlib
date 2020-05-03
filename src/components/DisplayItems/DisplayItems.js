import React from 'react';
import DisplayCard from './DisplayCard/DisplayCard';

class DisplayItems extends React.Component {

    renderItemList() {
        return this.props.displayItems.results.map(item => {            
            return (
                <DisplayCard key={item.id} item={item} />
            )
        })
    }

    renderLoader() {
        let loadArr = [1,2,3,4,5,6,7,8,9,10];

        return loadArr.map(n => {
            return (
                <div key={n} className="ui card">
                    <div className="image">
                        <div className="ui placeholder">
                            <div className="square image"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui placeholder">
                            <div className="header">
                            <div className="very short line"></div>
                            <div className="medium line"></div>
                            </div>
                            <div className="paragraph">
                            <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                </div>                
            )
        })
    }

    render() {
        // console.log(this.props)
        if(!this.props.displayItems.results) {
            return (
                <div className="ui five cards">
                       {this.renderLoader()}                                    
                </div>
            )
        } else {            
            return (
                <div>                    
                    <div className='ui five cards' >
                        {this.renderItemList()}
                    </div>
                </div>                
            )
        }        
    }
}

export default DisplayItems;