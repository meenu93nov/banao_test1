import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export const HomeScreen = ({navigation}) => {
  const [info, setInfo] = useState();

  
  return (
    <View style={{flex: 1}}>
      {/* <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 30.360438,
          longitude: 76.765458,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChange={x => {
          console.log(x);
        }}></MapView> */}
      <TouchableOpacity
        style={{
          padding:20 , 
          margin:20,
          borderRadius: 8,
          backgroundColor: 'white',
          alignItems:"center"
        }}
        onPress={()=>{
          Geolocation.getCurrentPosition(data => setInfo(data.coords.latitude + " " + data.coords.longitude))
        
        }}
        >
        <Text>Get my location</Text>
       
      </TouchableOpacity>
      
      <Text style={{
        padding:40
      }}>Latitude & Longitude {info}</Text>
    </View>
  );
};
