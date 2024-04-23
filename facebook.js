import { initializeApp, getAuth } from "firebase/app";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5e5TktK46ydcFjsj2TaYpTOG-cDCMAdE",
  authDomain: "apiweb2024-abcac.firebaseapp.com",
  projectId: "apiweb2024-abcac",
  storageBucket: "apiweb2024-abcac.appspot.com",
  messagingSenderId: "592270019709",
  appId: "1:592270019709:web:2dfd4c5e9452bad2a5f514",
  measurementId: "G-1WPBPT5J2Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookLogin = document.getElementById('fa-facebook');


facebookLogin.addEventListener('click', () => {
    var provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            alert('Usuario logueado');
        }).catch((error) => {
            console.log(error);
            alert('Error al iniciar sesión');
        });

});
