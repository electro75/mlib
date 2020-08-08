import React from 'react';
import DisplayCard from '../DisplayItems/DisplayCard/DisplayCard';
import './ItemRow.css';

const ItemRow = (props) => {
    console.log(props.items);
    return (
        <div className="section--container" >            
            <h2 className="row-title" >{props.title}</h2>
            
                <div className="row-container" >
                    
                        {props.items.map(item => {
                            return (
                            <div className="row--item" >            
                                <DisplayCard                                
                                    key={item.id}
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