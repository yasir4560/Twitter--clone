// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxXm60YV2LoWeLAzfKTVicj16Q5_IUsdA",
    authDomain: "twitter-clone-d0c55.firebaseapp.com",
    projectId: "twitter-clone-d0c55",
    storageBucket: "twitter-clone-d0c55.appspot.com",
    messagingSenderId: "591648891520",
    appId: "1:591648891520:web:679a202d1498e4863cfc65",
    measurementId: "G-SYPWM8HL9X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const  dataBase = firebaseApp.firestore();
  export default dataBase;