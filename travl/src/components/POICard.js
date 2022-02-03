import React, { useState } from 'react';
import POIPopUp from './POIPopUp';

function POICard(props) {
    const[hidden, setHidden] = useState(true)
  return <div className='circlea' onClick={()=> setHidden(!hidden)}>
      {/* <p>{props.info.title}</p> */}
      <img src={props.info.photo} className='circlep' alt=''></img> 
      <POIPopUp info={props.info} hidden={hidden} setHidden={setHidden}/>
  </div>;
}

export default POICard;
