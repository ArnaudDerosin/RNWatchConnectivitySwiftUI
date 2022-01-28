//
//  PhoneConnector.swift
//  WatchApp WatchKit Extension
//
//  Created by Arnaud Derosin on 2022/01/28.
//

import WatchKit
import WatchConnectivity

final class PhoneConnector: NSObject, ObservableObject {
  var session: WCSession
  
  @Published var phoneReachabilty = false
  
  init(session: WCSession  = .default) {
    self.session = session
    super.init()
    if WCSession.isSupported() {
      session.delegate = self
      session.activate()
    }
  }
}

extension PhoneConnector: WCSessionDelegate {
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    
  }
}
