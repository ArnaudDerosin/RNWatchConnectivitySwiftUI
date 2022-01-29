//
//  BackgroundTransferView.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/29.
//

import SwiftUI

struct BackgroundTransferView: View {
    @ObservedObject var phoneConnector = PhoneConnector()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ User info")
                      .fontWeight(.bold)
                    Text(String(self.phoneConnector.userInfo))
                }
                
                VStack(alignment: .leading, spacing: 5) {
                    Text("↓ Application context")
                      .fontWeight(.bold)
                    Text(self.phoneConnector.applicationContextMessage)
                }
            }
        }
    }
}

struct BackgroundTransferView_Previews: PreviewProvider {
    static var previews: some View {
        BackgroundTransferView()
    }
}
