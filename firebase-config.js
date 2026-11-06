
const firebaseConfig = {
  apiKey: "AIzaSyAhzYMAYNpuIz6Z_UufwpJGt8mcpiO_8L0",
  authDomain: "pabrikneshi.firebaseapp.com",
  projectId: "pabrikneshi",
  storageBucket: "pabrikneshi.firebasestorage.app",
  messagingSenderId: "997511755846",
  appId: "1:997511755846:web:f6e69f0ccb40839a44b247"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();
