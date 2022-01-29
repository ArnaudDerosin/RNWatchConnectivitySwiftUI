//
//  InteractiveMessaging.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/29.
//

import SwiftUI

struct InteractiveMessaging: View {
    @ObservedObject var phoneConnector = PhoneConnector()
  
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 5) {
                    Text("↑ Send to App")
                      .fontWeight(.bold)
                    Button {
                        self.sendMessage()
                    } label: {
                        Text("Send")
                    }
                }
              
                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ Receive from App")
                      .fontWeight(.bold)
                    Text(self.phoneConnector.receivedMessage)
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

struct InteractiveMessaging_Previews: PreviewProvider {
    static var previews: some View {
        InteractiveMessaging()
    }
}
