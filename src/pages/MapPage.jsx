import React,{useState,useEffect} from 'react';
import Header from '../components/Header'
import { getPlaceData } from "../api";
import Map from '../components/Map';

const MapPage = () => {
    const [places,setPlaces] = useState([]);

    const [coords, setCoords] = useState({ lat: 20.5937,  lng: 78.9629 });
    const [boundaries,setBoundaries] = useState(null);

    useEffect(()=>{
    
        // pass boundaries.sw boundaries.ne to getPlaceData
        if(boundaries){
          console.log(boundaries);
        getPlaceData(boundaries.sw,boundaries.ne)
        .then(data=>{
          setPlaces(data);
          console.log("data",data);
        })
      }
      },[boundaries])

  return (
    <>
    {/* <Header/> */}
    <Map setBoundaries={setBoundaries} coords={coords} places={places} />
    </>
  )
}

export default MapPage