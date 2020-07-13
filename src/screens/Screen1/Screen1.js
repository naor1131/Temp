import React, { useState } from 'react';
import './Screen1.css';
import Map from '../../components/Map/Map.js'
import List from '@material-ui/core/List';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

const Screen1 = () => {

  const [state, setState] = useState({
    lat:'',
    lng:'',
    center: [31.0827, 35.2707],
    zoom: 3,
    pushPins : [{
      location: [31, 35]
    }],
  });


  let polyline = {
    location: state.pushPins.map((pin) => { return [pin.location[0], pin.location[1]]}),
    option: { strokeColor: 'blue', strokeThickness: 10}
  };

  if(state.pushPins.length){
    polyline.location.push(state.pushPins[0].location);
  }

  return (

        <div className="flex-container">
            
            <div style={{width: '70%', height: 'inherit'}}>
              <Map 
                center = {state.center}
                zoom = {state.zoom}
                className="map"
                pushPins={state.pushPins}
                polyline={polyline}
              />
            </div>
            

            <div style={{margin: '10px', width: '30%', height: 'inherit'}}>
                <h1>סמן במפה</h1>

                <input value={state.lat} onChange={(e) => { setState({...state, lat: e.target.value})} }/>

                <br/>

                <input value={state.lng} onChange={(e) => {setState({...state, lng: e.target.value})}}/>

                <br/>
                <button 
                  onClick={() => {
                    setState({...state, pushPins: [...state.pushPins, {location: [state.lat, state.lng]}]})
                  }}>הוסף</button>



                <List style={{backgroundColor: '#ffffff'}}>
                   {
                        state.pushPins.map((pin, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemAvatar onClick={() => {
                                      setState({...state, pushPins: state.pushPins.filter((e, i) => i != index)})
                                    }}>
                                        <Avatar>
                                            <DeleteIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`נקודה ${index}`} secondary={`(${pin.location[0]}, ${pin.location[1]})`} />
                                </ListItem>
                            )
                        })
                    }
                </List>
                
            </div>
            
        </div> 

  );
}

export default Screen1;
