import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './firebase';
//import './App.css';
function App() {

  const [location,setCurrentLocation] : any = useState();
  const [buttonClicked,setButtonClicked] : any = useState(false);
  const [locationStore,setLocationStore] : any = useState([])

  useEffect(()=>{
    if(locationStore.length > 0){
      console.log("locationStore ::: ", locationStore);
    }
    //pushNotification();
  
  },[locationStore])

  const getCurrentLocation = (event:any) =>{
    console.log("button clicked :: ", buttonClicked);
      console.log("navigator.geolocation" , navigator.geolocation);
      if(navigator.geolocation){
        navigator.geolocation.watchPosition((position:any)=>{
          console.log("Current Moving position :: ",position);
          setLocationStore((oldArray:any) => [...oldArray,position]);
          console.log("location Store :: ", locationStore);
          setCurrentLocation(position);
        });
      }
  }


  return (
    <div className="App">
      <button className = "getcurrentlocation" onClick = {getCurrentLocation}>
      Get Current Location
      </button>
      {
        locationStore.length > 0 ?
        locationStore.map((value:any,index:any) => {
          return (<p key = {index}>{"latitude: "+ value.coords.latitude +"  longitude: " + value.coords.longitude} </p>);
        })
        :
        (<></>)
      }

    </div>
  );
}

export default App;
