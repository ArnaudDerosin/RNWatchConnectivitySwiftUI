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
        VStack(alignment: .leading, spacing: 5) {
            Text("Send to Watch")
            Button {
                self.sendMessage()
            } label: {
                Text("Send")
            }
        }
    }
  
    private func sendMessage() {
        let randomNumber = String(Int.random(in: 0..<100))
        let message: [String: Any] = ["watchMessage": randomNumber]
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
