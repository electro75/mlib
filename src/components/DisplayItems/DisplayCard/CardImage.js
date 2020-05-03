import React, { Component } from 'react'
import { Dimmer, Image } from 'semantic-ui-react'

export default class CardImage extends Component {
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    getDescription() {        

        let description = (this.props.overview.length < 200) ? this.props.overview : 
            `${this.props.overview.slice(0,200)}...`

        return description

    }

    render() {
        const { active } = this.state
        const content = (
        <div>
            {this.getDescription()}
        </div>
        )

        return (
        <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}        
            src={this.props.image}
        />
        )
    }
}