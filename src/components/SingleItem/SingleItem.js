import React from 'react';
import {useParams} from 'react-router-dom';

const SingleItem = () => {

    let params = useParams();    

return <div>{[params.id]}</div>
}

export default SingleItem