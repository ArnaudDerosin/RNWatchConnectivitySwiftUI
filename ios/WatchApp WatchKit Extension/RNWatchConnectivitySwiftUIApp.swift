//
//  RNWatchConnectivitySwiftUIApp.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/28.
//

import SwiftUI

@main
struct RNWatchConnectivitySwiftUIApp: App {
    @SceneBuilder var body: some Scene {
        WindowGroup {
            NavigationView {
                HomeView()
            }
        }

        WKNotificationScene(controller: NotificationController.self, category: "myCategory")
    }
}
