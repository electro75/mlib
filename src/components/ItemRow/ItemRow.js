import React from 'react';
import DisplayCard from '../DisplayItems/DisplayCard/DisplayCard';
import './ItemRow.css';

const ItemRow = (props) => {
    console.log(props.items);
    return (
        <div>
            <h3>{props.title}</h3>
            <div className="ui four cards" >
                {props.items.map(item => {
                    return (
                        
                    <DisplayCard                                
                        key={item.id}
                        item={item}
                        type='tv'
                    />
                        
                        
                    )
                })}
            </div>
        </div>
    )
}

export default ItemRow;