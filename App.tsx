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
import { watchEvents, sendMessage, transferUserInfo, updateApplicationContext } from "react-native-watch-connectivity";

import { Colors } from './src/constants/Colors';
import { Header } from './src/containers/Header';
import { Button } from './src/components/Button';
import { SectionHeader } from './src/components/SectionHeader';
import { SectionNote } from './src/components/SectionNote';
import { SectionSubHeader } from './src/components/SectionSubHeader';


const App = () => {
    const [messageToWatch, setMessageToWatch] = useState("");
    const [messageFromWatch, setMessageFromWatch] = useState("Waiting...");

    // Send Message to the Apple Watch - Used when information is required immediately & both apps are running in the foreground.
    const sendMessageToWatch = () => {
        console.log("RN - Send message to Watch");
        sendMessage(
            {text: messageToWatch}, 
            reply => {console.log(reply);},
            error => { if (error) { Alert.alert('The message cant be sent! The watchOS application is probably not running in the foreground! 🤔')}}
        ); 
    }

    // Receive / Reply to messages from Watch
    const messageListener = () => watchEvents.on('message', (message: { messageWatch: string }) => {
        console.log('RN - Received message from Watch', message);
        setMessageFromWatch(message.messageWatch)
    })

    useEffect(() => {
        messageListener()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{paddingHorizontal: 16}}>
                <Header />
        
                {/*
                *
                * Interactive Messaging - http://mtford.co.uk/react-native-watch-connectivity/docs/communication/#interactive-messaging
                *
                * */}
                <View style={{marginTop: 24, marginBottom: 32}}>
                    <SectionHeader title='- Interactive Messaging -' />
                    <SectionNote text='// Used when information is required immediately and both apps are running in the foreground.' />
                    <SectionSubHeader title='↓ Message received from Apple Watch' />
                    <View style={{backgroundColor: "#2C2C2E", borderRadius: 16, justifyContent: 'center', paddingVertical: 8, marginVertical: 8}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.tundora, marginHorizontal: 12, marginVertical: 8}}>{messageFromWatch}</Text>
                    </View>

                    <SectionSubHeader title='↑ Send message to Apple Watch' />
                    <TextInput style={styles.textInput} onChangeText={setMessageToWatch} placeholder="Message here" value={messageToWatch} clearButtonMode='always' />
                    <Button title='SEND!' onPress={() => sendMessageToWatch()} />
                </View>

                {/*
                *
                * Background Transfers - http://mtford.co.uk/react-native-watch-connectivity/docs/communication/#background-transfers
                *
                */}
                <View style={{marginVertical: 16}}>
                    <SectionHeader title='- Background transfer -' />
                    <SectionNote text="// Background Transfers. The OS is responsible for determining when the content is delivered. You do not need both apps to be reachable in order to use these methods.." />

                    <SectionSubHeader title='User Info' />
                    <SectionNote text="// Dictionaries sent using this method are queued on the other device and delivered in the order in which they were sent. After a transfer begins, the transfer operation continues even if the app is suspended." />
                    <SectionSubHeader title='↑ Send' />
                    <View style={{height: 8}} />
                    <Button 
                        title='SEND RANDOM NUMBER!'
                        onPress={() => transferUserInfo({randomNumber: Math.floor(Math.random() * 100) + 1})} 
                    />

                    <View style={{height: 16}} />
                    <SectionSubHeader title='Application Context' />
                    <SectionNote text="// Application Context is used when only the latest information is required. Once the Watch App or Companion App is launched the data will be received." />

                    <SectionSubHeader title='↑ Send' />
                    <View style={{height: 8}} />
                    <Button 
                        title='SEND RANDOM NUMBER!' 
                        onPress={() => updateApplicationContext({randomNumber: Math.floor(Math.random() * 100) + 1})}
                    />
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
        marginBottom: 8,
        borderRadius: 16,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: Colors.shark,
        color: Colors.white
    }
});

export default App;