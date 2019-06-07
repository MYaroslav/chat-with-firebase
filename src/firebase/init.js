import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCu-0f_KFhGcCfbuuLyfrrb6PouIJYnc8A",
  authDomain: "vue-chat-ae44f.firebaseapp.com",
  databaseURL: "https://vue-chat-ae44f.firebaseio.com",
  projectId: "vue-chat-ae44f",
  storageBucket: "vue-chat-ae44f.appspot.com",
  messagingSenderId: "255647370218",
  appId: "1:255647370218:web:576871e4c1a6ccb2"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
