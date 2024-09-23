import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Importar o getAnalytics se você precisar usar o Google Analytics
// import { getAnalytics } from "firebase/analytics"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "******",
  authDomain: ""******",",
  projectId: ""******",",
  storageBucket: ""******",",
  messagingSenderId: ""******",",
  appId: ""******",",
  measurementId: ""******"," 
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

const storage = getStorage();

export { auth, db }; 
