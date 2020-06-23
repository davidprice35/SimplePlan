import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase Code
var config = {
  
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 