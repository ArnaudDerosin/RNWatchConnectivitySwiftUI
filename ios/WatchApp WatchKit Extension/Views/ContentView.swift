//
//  ContentView.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/28.
//

import SwiftUI

struct ContentView: View {
    @ObservedObject var phoneConnector = PhoneConnector()
  
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 5) {
                    Text("↑ Send to Watch")
                    Button {
                        self.sendMessage()
                    } label: {
                        Text("Send")
                    }
                }

                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ Message from App")
                    Text(self.phoneConnector.receivedMessage)
                }
              
                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ User info")
                    Text(String(self.phoneConnector.userInfo))
                }
              
                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ Application context")
                    Text(self.phoneConnector.applicationContextMessage)
                }
            }
        }
    }
  
    private func sendMessage() {
        let randomNumber = String(Int.random(in: 0..<100))
        let message: [String: Any] = ["messageWatch": randomNumber]
        self.phoneConnector.session.sendMessage(message, replyHandler: nil) { (error) in
            print(error.localizedDescription)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
