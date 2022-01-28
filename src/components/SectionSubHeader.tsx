import React from 'react';
import { Text, View } from 'react-native';

import { Colors } from '../constants/Colors';

type SectionSubHeaderProps = {
  title: string;
};

export const SectionSubHeader = ({ title }: SectionSubHeaderProps): JSX.Element => {
  return (
    <View style={{height: 30, borderRadius: 32, marginTop: 8, backgroundColor: Colors.shark, justifyContent: 'center'}} >
      <Text style={{fontWeight: '800', fontSize: 16, color: Colors.white80, marginVertical: 4, marginHorizontal: 16, textAlign: 'center'}}>{title}</Text>
    </View>
  )
}