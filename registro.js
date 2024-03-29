import { initializeApp, getAuth } from "firebase/app";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

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

registro.addEventListener('click', (e) => {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert('Usuario creado');
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Correo de verificación enviado');
        });
    }).catch((function (error) {
        const errorCode = error.code;

        if (errorCode == 'auth/email-already-in-use') {
            alert('El correo ya está en uso');
        } else if (errorCode == 'auth/invalid-email') {
            alert('Correo inválido');
        } else if (errorCode == 'auth/weak-password') {
            alert('La Contraseña debe tener al menos 8 caracteres');
        }
    });
});