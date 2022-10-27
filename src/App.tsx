import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import {requestPermission} from './firebase';
import { getMessaging , getToken } from "firebase/messaging";

//import './App.css';
function App() {

  const [location,setCurrentLocation] : any = useState();
  const [buttonClicked,setButtonClicked] : any = useState(false);
  const [locationStore,setLocationStore] : any = useState([])
  const [notificationPermission, setNotificationPermisson ]:any = useState(false);

  useEffect(()=>{
    if(locationStore.length > 0){
      console.log("locationStore ::: ", locationStore);
    }
    //requestPermission();
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

  const allowPushNotification = (event:any) =>{
    requestPermission().then((data)=>{
      console.log("texmp data :: ", data);
      if(data){
        console.log("data :: ",data);
        setNotificationPermisson(true);
      }
    })
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

      <button className="notification" onClick = {allowPushNotification}>
        Allow Push Notification
      </button>

    </div>
  );
}

export default App;
