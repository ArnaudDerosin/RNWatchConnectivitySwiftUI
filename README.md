# RNWatchConnectivitySwiftUI
Sample project that allow you to test communication between a React Native iOS app and its paired watchOS app using the SwiftUI framework.

This application will allow you to try communication between devices including interactive messaging, background transfer and monitoring including reachability, watch app installation.

# Features 
### Monitoring
* Check if whether or not the companion Watch app is installed.
* Check if the Watch app is reachable.

### Interactive Messaging
* Receive a random number from the Apple Watch application
* Send the typed text to the Apple Watch application

### Background Transfer
* User info (differs from Application Context in that nothing is overridden)
  * Update from App
  * Update from Watch
* Context (used when only the latest information is required. Once the Watch App or Companion App is launched the data will be received)
  * Update from App
  * Update from Watch

# Install
```
git clone https://github.com/ArnaudDerosin/RNWatchConnectivitySwiftUI.git
yarn install
cd ios
pod install
cd ..
# run you app 
yarn react-native run-ios
```

# Links
* <a href="http://mtford.co.uk/react-native-watch-connectivity/">react-native-watch-connectivity</a>