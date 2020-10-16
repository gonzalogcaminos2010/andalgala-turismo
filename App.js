import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Navegacion from './app/navegacion/Navegacion';
import { firebaseApp } from "./app/utils/firebase";
import * as firebase from 'firebase/app';
//import * as firebase from "firebase";


export default function App() {
   

    useEffect(()=>{
      firebase.auth().onAuthStateChanged(user=>{
        console.log(user);
      })
      
      },[])
    
  
 return <Navegacion/>;   


}