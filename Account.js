import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import  *  as firebase from 'firebase';




import UsuarioInvitado from "../Account/UsuarioInvitado";
import UsuarioLogueado from "../Account/UsuarioLogueado"; 

export default function Account() {
  const [ login , setLogin ]= useState(null);

  useEffect(()=>{

      firebase.auth().onAuthStateChanged((user)=>{

      console.log(user)  
      !user ? setLogin(false): setLogin(true);


      })


    }, []);
    
    if(login === null) return <Text>Cargando...</Text>

    return login ? <UsuarioLogueado />: <UsuarioInvitado />



}