/**
 *
 * React Native App / watchOS communication test app
 * watchOS - Dependent app using SwiftUI framework 
 * app - Use react-native-watch-connectivity library for comuunication
 *
 * Created by Arnaud Derosin.
 * 
 */

import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { sendMessage, watchEvents, transferUserInfo } from "react-native-watch-connectivity";

import { Colors } from './src/constants/Colors';
import { Header } from './src/containers/Header';
import { Button } from './src/components/Button';
import { SectionHeader } from './src/components/SectionHeader';
import { SectionNote } from './src/components/SectionNote';
import { SectionSubHeader } from './src/components/SectionSubHeader';

const App = () => {
  const [message, setMessage] = useState("");
  const [sendUserInfo, setSendUserInfo] = useState("");

  const [messageFromWatch, setMessageFromWatch] = useState("Waiting...");

  // Send Message to the Apple Watch - Used when information is required immediately & both apps are running in the foreground.
  const sendMessageToWatch = () => {
    console.log("RN - Try to send message to Watch");
    sendMessage({text: message}, reply => {
      console.log(reply);
     }, error => { if (error) { Alert.alert('The message cant be sent! The watchOS application is probably not running in the foreground! 🤔')}}); 
  }

  // Receive / Reply to Messages
  const unsubscribe = () => watchEvents.on('message', (message, reply) => {
    console.log('RN - Received message from Watch', message);
    // reply({text: "Thanks Watch for the message!"});
    setMessageFromWatch(message.applianceEmoji + " " + message.applianceName)
  })

  useEffect(() => {
    unsubscribe()
  }, [])

  console.log("React native app re-rendered");
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{paddingHorizontal: 16}}>
        <Header />
  
        <View style={{marginTop: 8, marginBottom: 16}}>
          {/* 
          *
          * Interactive Messaging - http://mtford.co.uk/react-native-watch-connectivity/docs/communication/#interactive-messaging
          * 
          * */}
          <SectionHeader title='- Interactive Messaging -' />
          <SectionNote text='// Used when information is required immediately and both apps are running in the foreground.' />
          <SectionSubHeader title='Send message to Apple Watch' />
          <TextInput style={styles.textInput} onChangeText={setMessage} placeholder="Message here" value={message} clearButtonMode='always' />
          <Button title='SEND!' onPress={() => sendMessageToWatch()} />

          {/* Receive & reply to messages from the watch. */}
          <SectionSubHeader title='Received message from Apple Watch' />
          <SectionNote text='// Messages received from the watchOS app will be shown below.' />

          <View style={{backgroundColor: "#2C2C2E", borderRadius: 16, justifyContent: 'center', paddingVertical: 8, marginVertical: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.tundora, marginHorizontal: 12, marginVertical: 8}}>{messageFromWatch}</Text>
          </View>
        </View>

        <View style={{marginVertical: 16}}>
          <SectionHeader title='- Background transfer -' />
          <SectionSubHeader title='Transfer user info to the watch' />

          {/* 
          *
          * Background Transfers - http://mtford.co.uk/react-native-watch-connectivity/docs/communication/#background-transfers
          * 
          * */}
          <SectionNote text="// watchEvents.on('user-info') - Background Transfers. The OS is responsible for determining when the content is delivered. You do not need both apps to be reachable in order to use these methods.." />
          <TextInput style={styles.textInput} onChangeText={setSendUserInfo} placeholder="Message here" value={sendUserInfo} clearButtonMode='always' />
          <Button title='SEND!' onPress={() => transferUserInfo({key: text})} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.eerieBlack
  },
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

export default App;