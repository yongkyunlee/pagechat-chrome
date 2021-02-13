import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

let userUid = null;

const firebaseConfig = {
    apiKey: "AIzaSyC6KqtZ1MGPxcHFrVYmqlIANU589g9x2xw",
    authDomain: "chrome-extension-noninertial.firebaseapp.com",
    databaseURL: "https://chrome-extension-noninertial-default-rtdb.firebaseio.com",
    projectId: "chrome-extension-noninertial",
    storageBucket: "chrome-extension-noninertial.appspot.com",
    messagingSenderId: "908579202364",
    appId: "1:908579202364:web:446c01b1e3e347d0562a39",
    measurementId: "G-48RJPR3D4L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const isOfflineForDatabase = {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

const isOnlineForDatabase = {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

const isOfflineForFirestore = {
    state: 'offline',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
};

const isOnlineForFirestore = {
    state: 'online',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
};

firebase.auth().onAuthStateChanged(user => {
    if (user) { // If the user is signed in
        userUid = user.uid;
        const userStatusDatabaseRef = firebase.database().ref('/status/' + user.uid);
        const userStatusFirestoreRef = firebase.firestore().doc('/status/' + user.uid);

        firebase.database().ref('.info/connected').on('value', function(snapshot) {
            // If we're not currently connected, don't do anything.
            console.log('connected');
            if (snapshot.val() == false) {
                userStatusFirestoreRef.set(isOfflineForFirestore);
                return;
            };
            userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
                userStatusDatabaseRef.set(isOnlineForDatabase);
                userStatusFirestoreRef.set(isOnlineForFirestore);
            });
        });
    }
    else {
        console.log(userUid + " signed out");
        firebase.database().ref('/status/' + userUid).set(isOfflineForDatabase);
        firebase.firestore().doc('/status/' + userUid).set(isOfflineForFirestore);
        userUid = null;
    }
});
