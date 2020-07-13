import React, { useState } from 'react';
import './Map.css';
import { ReactBingmaps } from 'react-bingmaps';

const Map = (props) => {

    let bingmapKey = 'Ar397GfbHkzoTAXRrZEao2iS9MLmBl4i3I8NG0vA5UKtk8oJbu9h6Oqsg03BZiaa';       

    
    return (
  
      <div className="map-container">
        <ReactBingmaps 
          id="one"
          bingmapKey = {bingmapKey} 
          center = {props.center}
          zoom = {props.zoom}
          className="map"
          pushPins={props.pushPins ? props.pushPins : undefined}
          polyline={props.polyline ? props.polyline : undefined}
        > 
        </ReactBingmaps>
      </div>
  
    );
  }
  
  export default Map;

  

