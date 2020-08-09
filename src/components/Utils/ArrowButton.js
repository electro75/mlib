import React from 'react';
import './ArrowButton.css'

export const  ArrowButton = (props)=> {

    return <button className='btn btn--arr' onClick={props.clickFunc} ><i className={`angle ${props.direction} icon`}></i></button>
    
}

