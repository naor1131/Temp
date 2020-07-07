import React, { useState } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

const App = () => {

  const [state, setState] = useState({
    lat:'',
    lng:'',
    bingmapKey: 'Ar397GfbHkzoTAXRrZEao2iS9MLmBl4i3I8NG0vA5UKtk8oJbu9h6Oqsg03BZiaa',
    pushPins : [
      {
        "location":[13.0827, 80.2707],
        "option":{ color: 'red' },
      }
    ],
      
  });




  return (
    <div className="flex-container">
        
        <div className="map-container">
          <ReactBingmaps 
            id="one"
            bingmapKey = {state.bingmapKey} 
            center = {[13.0827, 80.2707]}
            zoom = {4}
            className="map"
            pushPins={state.pushPins}
          > 
          </ReactBingmaps>
        </div>


        <div style={{margin: '10px'}}>
            <h1>סמן במפה</h1>

            <input value={state.lat} onChange={(e) => {setState({...state, lat: e.target.value})}}/>

            <br/>

            <input value={state.lng} onChange={(e) => {setState({...state, lng: e.target.value})}}/>

            <br/>
            <button onClick={() => {setState({...state, pushPins: [...state.pushPins, {location: [state.lat, state.lng], option:{ color: 'red' }}]})}}>הוסף</button>
            
        </div>
        
    </div>
  );
}

export default App;
