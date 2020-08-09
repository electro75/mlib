import React from 'react';
import DisplayCard from '../DisplayItems/DisplayCard/DisplayCard';
import {ArrowButton} from '../Utils/ArrowButton';
import './ItemRow.css';

const ItemRow = (props) => {

    const containerRef = React.createRef();

    function handleScrollClick(val) {        
        // containerRef.current.scrollLeft +=10;
        console.log(val);
        if(val > 0) {        
            let scrollTimer = setInterval(() => {
               containerRef.current.scrollLeft += 10;
            }
            , 10);  
         
            setTimeout(() => { clearInterval(scrollTimer);}, 200);   
           }
      
           if(val < 0) {
            let scrollTimer = setInterval(() => {
               containerRef.current.scrollLeft -= 10;
            }
            , 10);  
         
            setTimeout(() => { clearInterval(scrollTimer);}, 500);
           }
    }
    
    return (
        <div className="section--container" >
            <div className="title--container" >
                <h2 className="row-title" >{props.title}</h2>
                <div className="btn--container" >
                    <ArrowButton direction='left'   clickFunc={()=>{handleScrollClick(-1)}} />
                    <ArrowButton direction='right' clickFunc={()=>{handleScrollClick(+1)}} />                    
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