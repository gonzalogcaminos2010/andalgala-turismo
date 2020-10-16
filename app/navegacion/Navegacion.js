import React from 'react';
import {NavigationContainer } from "@react-navigation/native"
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements";


import NegociosStack from "../navegacion/NegociosStack";
import SearchStack from "../navegacion/SearchStack";
import AccountStack from "../navegacion/AccountStack";
import FavoritosStack from './FavoritosStack';
import { Value } from 'react-native-reanimated';


const Tab = createBottomTabNavigator();

export default function Navegacion() {
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName="negocios"
        tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
            tabBarIcon:({ color }) => screenOptions(route, color),
         })}
        
        >
            <Tab.Screen name="negocios" component={NegociosStack} options ={{ title:"Negocios " }}/>
            <Tab.Screen name="account" component={AccountStack} options ={{ title:"Cuenta" }}/>
            <Tab.Screen name="favoritos" component={FavoritosStack} options ={{ title:"Favoritos" }}/>
            <Tab.Screen name="search" component={SearchStack} options ={{ title:"Buscar" }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  function screenOptions(route,color){
      let iconName;
      switch(route.name){
          case "negocios":
              iconName = "compass-outline"
              break;
            case "favoritos":
                iconName ="heart-outline"  
               break; 
            case "search":
                iconName ="heart-search"  
               break;
               case "account":
                iconName ="account-box"  
               break;        
           default:
               break;     

      }
      return(
          <Icon type="material-community" name={iconName} size={22} color={color}/> 
      )

  }