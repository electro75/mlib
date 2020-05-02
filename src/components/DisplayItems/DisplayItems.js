import React from 'react';
import {connect} from 'react-redux';
import {getItems} from '../../actions';

class DisplayItems extends React.Component {

    componentDidMount() {                
        this.props.getItems(this.props.item)
    }

    renderList() {

    }

    renderLoader() {
        let loadArr = [1,2,3,4,5,6,7,8];

        return loadArr.map(n => {
            return (
                <div key={n} className="four wide column">
                    <div className="ui card">
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
                </div> 
            )
        })
    }

    render() {
        console.log(this.props)

        // if(!this.props.displayItems) {
            return (
                <div className="ui grid">
                       {this.renderLoader()}                                    
                </div>
            )
        // } else {
        //     return (
        //         <div className='ui grid' >
        //             {this.props.item} list
        //         </div>
        //     )
        // }

        
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {getItems})(DisplayItems);