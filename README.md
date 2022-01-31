# RNWatchConnectivitySwiftUI - WIP (Background transfer from Watch)
The application allow you to try communication between a React Native iOS app and its paired watchOS app using the SwiftUI framework. It includes interactive messaging, background transfer and monitoring including reachability, watch app installation.

## React Native App preview
<p align="center">
  <img width="300" src="https://user-images.githubusercontent.com/3236032/151686961-6acf623c-6f27-4e7a-87ba-494c9f72edda.gif">
</p>
 
 ## Watch App preview
<p align="center">
  <img width="200" src="https://user-images.githubusercontent.com/3236032/151687045-d48b5eb3-498f-4508-8889-e12075512f84.PNG">
</p>

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
