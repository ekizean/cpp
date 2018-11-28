import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCL4nunC8z8E2YvF0dp4w0BtIvPAyxJPko",
    authDomain: "cppp-7fb85.firebaseapp.com",
    databaseURL: "https://cppp-7fb85.firebaseio.com",
    projectId: "cppp-7fb85",
    storageBucket: "",
    messagingSenderId: "736890669341"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database }; 