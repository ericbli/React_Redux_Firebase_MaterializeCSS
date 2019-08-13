import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAb9foTsgGfj-KFGEdg0iUTbZfe4LvrgaY",
  authDomain: "my-project-1504252851997.firebaseapp.com",
  databaseURL: "https://my-project-1504252851997.firebaseio.com",
  projectId: "my-project-1504252851997",
  storageBucket: "my-project-1504252851997.appspot.com",
  messagingSenderId: "30278601361",
  appId: "1:30278601361:web:c42e3b03e5685a2f"

};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 