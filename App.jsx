import React, {useState} from 'react';
import { Image, StyleSheet,Text,View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import accept from './assets/accept.png'
import cancel from './assets/cancel.png'
const App = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={['#92cdf3','#73cfa5','#fcd68b','#d58d65','#dd3544']}
        renderCard={item => {
          return (
            <View style={[styles.card,{backgroundColor:item}]}></View>
          );
        }}
        backgroundColor='white'
        onSwiper={()=>{}}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        verticalSwipe={false}
        animateCardOpacity
        animateOverlayLabelsOpacity={true}
        overlayLabels={{
          left: {
            element: <Image source={cancel} style={{
             width:60 , height:60 
            }}
            resizeMode='contain'
            />,
            title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              element: <Image source={accept} style={{
               width:60 , height:60 
              }}
              resizeMode='contain'
              />,
            title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
        }}
        cardIndex={0}
        stackSize={3}
        stackScale={3}
        stackSeparation={18}>
        </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white'
  },
  card: {
    flex: 0.80,
    borderRadius: 4,
    justifyContent: 'center'
  }
});

export default App;
