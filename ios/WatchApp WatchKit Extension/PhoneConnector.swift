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
  
		@Published var receivedMessage = "Waiting..."
    @Published var userInfo = "Waiting..."
    @Published var applicationContextMessage = "Waiting..."

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
  
    func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
        guard let receivedMessage = message["text"] as? String else { return }
        
        DispatchQueue.main.async {
            self.receivedMessage = receivedMessage
        }
    }
  
    func session(_ session: WCSession, didReceiveUserInfo userInfo: [String : Any] = [:]) {
        guard let userInfo = userInfo["randomNumber"] as? Int else { return }
      
        DispatchQueue.main.async {
            self.userInfo = String(userInfo)
        }
    }
  
    func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any]) {
        guard let receivedApplicationContext = applicationContext["randomNumber"] as? Int else { return }
        
        DispatchQueue.main.async {
            self.applicationContextMessage = String(receivedApplicationContext)
        }
    }
}
