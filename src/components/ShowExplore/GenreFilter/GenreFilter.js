import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { getItemGenres, setSingleGenre } from '../../../actions';

class GenreFilter extends React.Component {

    state = {
        item : this.props.item,
        modalOpen : false        
    }    

    componentDidMount() {  
        // this.props.getItemGenres(this.props.item);
            
    }

    getTrigger() {
        return (
            <button 
                className="ui circular raised green large button"
                onClick={() => this.setState({modalOpen : true})}>
                <i className="filter icon"></i>
                Filter
            </button>
        )
    }

    getGenreItems(genre) {
        this.setState({modalOpen: false})
        this.props.setSingleGenre(this.props.item, `${genre.id}`)        
    }

    renderGenres() {        

        return this.props.genres.map((genre, index) => {
            return (
                <div key={genre.id} className="three wide column" >
                    <div style={{textAlign: 'center'}} >
                    <button
                        id={genre.id}
                        className={`ui green button inverted`}
                        onClick={()=>{ this.getGenreItems(genre) }}
                        >
                        {genre.name}
                    </button>
                    </div>
                </div>
            )
        })
    }
    
    render() {        
        return (
            <Modal 
                trigger={this.getTrigger()} 
                basic 
                size='large'                
                open = {this.state.modalOpen}>
                <Header icon='filter' content='Filter Using Genres' />
                <Modal.Content>
                    <div className="ui grid">
                        {this.renderGenres()}
                    </div>
                </Modal.Content>
                <Modal.Actions>                
                <Button 
                    color='red' 
                    inverted
                    onClick={() => {this.getGenreItems({id: ''})}}
                    >
                    <Icon name='times' /> Cancel
                </Button>                
                </Modal.Actions>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres : state.genres
    }
} 

export default connect(mapStateToProps, {getItemGenres, setSingleGenre})(GenreFilter)