var firebaseConfig = {
    apiKey: "AIzaSyA2z5bLzI2aJi6L8YpSvfquRPc1FC9HmgU",
    authDomain: "comp1800-202430-dtc14.firebaseapp.com",
    projectId: "comp1800-202430-dtc14",
    storageBucket: "comp1800-202430-dtc14.appspot.com",
    messagingSenderId: "426838250711",
    appId: "1:426838250711:web:11d9b9ea53d26593e40c92"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();