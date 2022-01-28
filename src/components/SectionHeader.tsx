import React from 'react';
import { Text, View } from 'react-native';

import { Colors } from '../constants/Colors';

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps): JSX.Element => {
  return (
    <View style={{height: 60, borderRadius: 32, backgroundColor: Colors.shark, justifyContent: 'center'}} >
      <Text style={{fontWeight: '800', fontSize: 16, color: Colors.harvestGold, marginVertical: 4, marginHorizontal: 16, textAlign: 'center'}}>{title}</Text>
    </View>
  )
}