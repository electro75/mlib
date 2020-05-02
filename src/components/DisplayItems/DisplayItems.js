import React from 'react';
import {connect} from 'react-redux';
import {getItems} from '../../actions';
import DisplayCard from './DisplayCard/DisplayCard';

class DisplayItems extends React.Component {

    componentDidMount() {        
        this.props.getItems(this.props.item)
    }

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
            console.log(this.props.item);
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

const mapStateToProps = (state) => {
    return {displayItems: state.displayItems}
}

export default connect(mapStateToProps, {getItems})(DisplayItems);