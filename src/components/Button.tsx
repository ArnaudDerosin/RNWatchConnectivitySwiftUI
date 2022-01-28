import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/Colors';

type ButtonProps = {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void)
};

export const Button = ({ title, onPress }: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.harvestGold,
    padding: 14,
    borderRadius: 16
  },
});
