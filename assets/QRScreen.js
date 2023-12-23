import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import QRCode from 'react-native-qrcode-svg';
export const QRScreen = ({navigation}) => {
  const device = useCameraDevice('back');
  const [scannedCode, setscannedCode] = useState('')
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned - `, codes[0]?.value);
      setscannedCode(codes[0]?.value)
      
    },
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        <Text style={{
          padding:20  , 
          alignSelf:'center'
        }}>
          Scanned Code : {scannedCode}
        </Text>
      {device != null && (
        <Camera
        
          codeScanner={codeScanner}
          style={{flex:1}}
          device={device}
          isActive={true}
          onError={err => {
            console.log(err);
          }}
        />
      )}
    </View>
  );
};
