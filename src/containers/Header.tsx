import React from 'react';
import { Image, View } from 'react-native';

import { Colors } from '../constants/Colors';
import { ConnectivityStatus } from '../components/ConnectivityStatus';

export const Header = (): JSX.Element => {
  return(
    <View style={{flexDirection: 'row', height: 'auto', borderRadius: 32, marginVertical: 16, backgroundColor: Colors.shark}} >
      <Image style={{width: 50, height: 80, marginVertical: 16, marginHorizontal: 24}} source={require('../../assets/AppleWatch.png')} />
      <ConnectivityStatus />                
    </View>
  )
}
