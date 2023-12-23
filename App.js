import React, {useEffect, useState} from 'react';
import {Image, PermissionsAndroid, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './assets/HomeScreen.js';
import {QRScreen} from './assets/QRScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function App() {
  useEffect(() => {
    PermissionsAndroid.request('android.permission.CAMERA')
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({focused, size, color}) => {
              return (
                <Image
                  source={{
                    uri: 'https://cdn2.iconfinder.com/data/icons/social-media-8/512/pointer.png',
                  }}
                  style={{
                    height: size,
                    width: size,
                    tintColor: color,
                  }}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="QRcode"
          component={QRScreen}
          options={{headerShown: true, 
            tabBarIcon: ({focused, size, color}) => {
              return (
                <Image
                  source={{
                    uri: 'https://static-00.iconduck.com/assets.00/qr-scan-icon-2048x2048-aeh36n7y.png',
                  }}
                  style={{
                    height: size,
                    width: size,
                    tintColor: color,
                  }}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
      </BottomTab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="QRcode"
          component={QRScreen}
          options={{headerShown: true}}
        />
        </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
