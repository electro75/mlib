import React from 'react';

class DisplayItems extends React.Component {

    render() {        
        return <div>{this.props.item}</div>
    }
}

export default DisplayItems;