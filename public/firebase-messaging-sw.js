// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-sw.js').then(function(registration){
    console.log("Registation scuccessfull, scope is : ", registration.scope);
  }).catch(function(err){
    console.log("Service worker registation failed, error :",err);
  })
}

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDOooVxp3QF-4XtQIJw1Y6i-4Fp2gRokcc",
  authDomain: "totalqsr-pwa-poc.firebaseapp.com",
  projectId: "totalqsr-pwa-poc",
  storageBucket: "totalqsr-pwa-poc.appspot.com",
  messagingSenderId: "925807157827",
  appId: "1:925807157827:web:f917db4a5bd48af40caaf6",
  measurementId: "G-0YMTH62CG5"
};

firebase.initializeApp({
  messagingSenderId:"925807157827",
});

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});