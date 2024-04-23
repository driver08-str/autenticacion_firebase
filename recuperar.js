import { initializeApp } from "firebase/app";

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

const recuperar = document.getElementById('recuperar');

recuperar.addEventListener('click', () => {
    var email = document.getElementById('emailrec').value;

    sendPasswordResetEmail(auth, email).then(() => {
        alert('Correo enviado');
    }).catch((error) => {
        const errorCode = error.code;

        if (errorCode == 'auth/user-not-found') {
            alert('Usuario no encontrado');
        } else if (errorCode == 'auth/invalid-email') {
            alert('Correo inválido');
        }
    });
});

