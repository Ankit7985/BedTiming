import {View, Text, Container} from 'react-native';
import React from 'react';
import CircularSlider from '../circular-slider';
import {useSharedValue} from 'react-native-reanimated';

const BedTime = () => {
  const start = useSharedValue(0);
  const end = useSharedValue(1.5 * Math.PI);
  return (
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between', paddingHorizontal:15,      backgroundColor: 'black',}}>
    <Text
    style={{
      color: 'orange',
      marginVertical: 20,
      fontSize: 16,
      fontWeight: '600',
    }}

    >Cancel</Text>
    <Text
    style={{
      color: 'white',
      marginVertical: 20,
      fontSize: 16,
      fontWeight: '600',
    }}
    >Change Wake Up</Text>
    <Text
    style={{
      color: 'orange',
      marginVertical: 20,
      fontSize: 16,
      fontWeight: '600',
    }}
    >Done</Text>
    </View>
    <View style={{flex:1,backgroundColor:'black'}}>
    <View
      style={{
        backgroundColor: '#8a7476',
        alignItems: 'center',
        justifyContent: 'center',
        height:510,
        width:'100%'
      }}>
      <Text
        style={{
          color: 'white',
          marginVertical: 20,
          fontSize: 26,
          fontWeight: '600',
        }}>
        Wake up time
      </Text>


      <CircularSlider start={start} end={end} />

      <Text  style={{
        color: 'white',
        marginVertical: 20,
        fontSize: 26,
        fontWeight: '600',
      }}>BedTime</Text>
      </View>
      </View>
    </>
  );
};
export default BedTime;
