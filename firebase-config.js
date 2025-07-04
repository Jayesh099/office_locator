// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB_78efEwNs41DFSVRDvfjwFTYoJNTy5E",
    authDomain: "office-locator-85eaf.firebaseapp.com",
    projectId: "office-locator-85eaf",
    storageBucket: "office-locator-85eaf.firebasestorage.app",
    messagingSenderId: "592623246724",
    appId: "1:592623246724:web:3a9543c0bda036affa91d1",
    measurementId: "G-QZHJTKNBE9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
const auth = firebase.auth(); 