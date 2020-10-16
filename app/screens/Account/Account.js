import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import { firebase } from 'firebase';


import UsuarioInvitado from "../Account/UsuarioInvitado";
import UsuarioLogueado from "../Account/UsuarioLogueado"; 

function Account() {
  const [ login , setLogin ]= useState(null);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(()=>{
      console.log(user);
      !user ? setLogin(false):setLogin(true);
    
    });

  },[]);


export default Account;



