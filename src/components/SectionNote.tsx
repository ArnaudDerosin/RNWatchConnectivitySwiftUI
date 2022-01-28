import React from 'react';
import { Text } from 'react-native';

import { Colors } from '../constants/Colors';

type SectionNoteProps = {
  text: string;
};

export const SectionNote = ({ text }: SectionNoteProps): JSX.Element => {
  return (
    <Text style={{fontWeight: '200', fontSize: 10, color: Colors.tundora, marginTop: 4, marginHorizontal: 8}}>{text}</Text>
  )
}