import React from 'react';
import { Text, View } from 'react-native';
import { useInstalled, useReachability } from 'react-native-watch-connectivity';

import { Colors } from '../constants/Colors';

export const ConnectivityStatus = (): JSX.Element => {
  const isInstalled = useInstalled()
  const isReachable = useReachability(); // Some functionality e.g. interactive messaging is only available when the watch app is reachable.
  
  return(
    <View style={{flexDirection: 'column', height: 80, marginVertical: 16, marginHorizontal: 16}}> 
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}} >

        {isInstalled ? 
          <View style={{height: 10, width: 10, backgroundColor: Colors.green, borderRadius: 8, marginTop: 2}} /> 
          :
          <View style={{height: 10, width: 10, backgroundColor: Colors.red, borderRadius: 8, marginTop: 2}} />
        }
        <Text style={{fontWeight: '600', fontSize: 16, color: Colors.white80}}>  watchOS app installed</Text>
      </View>

      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}} >
        {isReachable ? 
          <View style={{height: 10, width: 10, backgroundColor: Colors.green, borderRadius: 8, marginTop: 2}} /> 
          :
          <View style={{height: 10, width: 10, backgroundColor: Colors.red, borderRadius: 8, marginTop: 2}} />
        }
        <Text style={{fontWeight: '600', fontSize: 16, color: Colors.white80}}>  watchOS app reachable</Text>
      </View>
    </View>
  )
}