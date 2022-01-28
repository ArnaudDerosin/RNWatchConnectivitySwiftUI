import React from 'react';
import { Image, View } from 'react-native';

import { Colors } from '../constants/Colors';
import { ConnectivityStatus } from '../components/ConnectivityStatus';
import { useReachability } from 'react-native-watch-connectivity';

export const Header = (): JSX.Element => {
  const isReachable = useReachability();

  return(
    <View style={{flexDirection: 'row', height: 'auto', borderRadius: 32, marginVertical: 16, backgroundColor: Colors.shark}} >
      <Image style={{width: 50, height: 80, marginVertical: 16, marginLeft: 32, marginRight: 16}} source={isReachable ? require('../../assets/AppleWatchReachable.png') : require('../../assets/AppleWatch.png')} />
      <ConnectivityStatus />                
    </View>
  )
}
