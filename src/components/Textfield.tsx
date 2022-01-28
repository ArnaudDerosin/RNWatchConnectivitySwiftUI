import React, { useState } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/Colors';

type TextFieldProps = {
  placeholder?: string;
  value?: string
};

export const TextField = ({ placeholder, value }: TextFieldProps): JSX.Element => {
  const [textfieldValue, setTextfieldValue] = useState(value);


  return (
    <TextInput style={styles.textInput} onChangeText={setTextfieldValue} placeholder={placeholder ? placeholder :  "Message here"} value={textfieldValue} clearButtonMode='always' />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    padding: 10,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 'bold', 
    backgroundColor: Colors.shark,
    color: Colors.white
  }
});
