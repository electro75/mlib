import React from 'react';
import DisplayCard from '../DisplayItems/DisplayCard/DisplayCard';
import './ItemRow.css';

const ItemRow = (props) => {

    const containerRef = React.createRef();

    function handleScrollClick() {        
        containerRef.current.scrollLeft +=10;
    }
    
    return (
        <div className="section--container" >
            <div>
                <h2 className="row-title" >{props.title}</h2>
                <div>
                    <button onClick={handleScrollClick} > right </button>
                </div>
            </div>            
            
                <div className="row-container" ref={containerRef}>
                        {props.items.map(item => {
                            return (
                            <div className="row--item" key={item.id} >
                                <DisplayCard                                
                                    
                                    item={item}
                                    type='tv'
                                />
                            </div>
                                
                            )
                        })}
                    
                    
                </div>
            
        </div>
    )
}

export default ItemRow;