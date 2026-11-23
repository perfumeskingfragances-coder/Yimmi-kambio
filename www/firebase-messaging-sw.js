importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBgCfc-u07l4NhgBaQbhqK7hB1aL3aSrLo",
    authDomain: "yimmi-kambio-v2.firebaseapp.com",
    databaseURL: "https://yimmi-kambio-v2-default-rtdb.firebaseio.com",
    projectId: "yimmi-kambio-v2",
    storageBucket: "yimmi-kambio-v2.firebasestorage.app",
    messagingSenderId: "386152088368",
    appId: "1:386152088368:web:d304a246e3233c6115bef5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || "Yimmi Kambio";
    const options = {
        body: payload.notification?.body || "Nueva actualización de tasas disponible.",
        icon: "https://i.postimg.cc/t4fJptrQ/BCV-20261120-041842-0000.png",
        badge: "https://i.postimg.cc/t4fJptrQ/BCV-20261120-041842-0000.png",
        tag: "yimmi-kambio-push"
    };
    self.registration.showNotification(title, options);
});
