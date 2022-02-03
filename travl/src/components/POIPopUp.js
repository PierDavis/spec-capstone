import React from 'react';

function POIPopUp(props) {
  return <div className='pop-up' id={props.hidden ? 'hidden' : ''}>
        <div id='point-name' className="point-name">
        {/* point of interest */}
        {props.info.title}
                
        </div>

        <div id='location_coordinates' className="point-location">
        {/* point of interest location */}
        {props.info.coordinates}
        </div>

        <div id='point-category' className="point-category">
        {/* point category */}
        {props.info.name}
        </div>

        <div id='point-notes' className="point-notes">
        {/* point of interest notes */}
        {props.info.notes}
        </div>
        {/* <button onClick={props.setHidden}>hide</button> */}
  </div>;
}

export default POIPopUp;
