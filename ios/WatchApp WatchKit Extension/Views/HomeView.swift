//
//  HomeView.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/29.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        VStack(alignment: .center, spacing: 0) {
            NavigationLink(destination: InteractiveMessaging()) {
                HStack {
                    Image(systemName: "bolt.horizontal.fill")
                      .font(.title3)
                    VStack {
                      Text("Interactive ")
                        .fontWeight(.semibold)
                        .font(.caption)
                      Text("Messaging")
                        .fontWeight(.semibold)
                        .font(.caption)
                    }
                }
                .padding()
                .foregroundColor(.white)
            }
          
            Spacer()
          
            NavigationLink(destination: BackgroundTransferView()) {
                HStack {
                    Image(systemName: "bolt.horizontal")
                      .font(.title3)
                    Text("Background transfer")
                      .fontWeight(.semibold)
                      .font(.caption)
                }
                .padding()
                .foregroundColor(.white)
            }
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
