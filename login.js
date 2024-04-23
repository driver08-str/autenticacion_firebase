import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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

const login = document.getElementById('login');
const cerrar = document.getElementById('cerrar');

login.addEventListener('click', (e) => {
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then((cred) => {
        alert('Usuario logueado');
        console.log(cred.user);
    }).catch((error) => {
        const errorCode = error.code;

        if (errorCode == 'auth/user-not-found') {
            alert('Usuario no encontrado');
        } else if (errorCode == 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else if (errorCode == 'auth/invalid-email') {
            alert('Correo inválido');
        }
    });
});

cerrar.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        alert('Sesión cerrada');
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuario activo');
        var email = user.emailVerified;
        if (email) {
            window.open("https://www.google.com/");
        } else {
            signOut(auth);
        }
    } else {
        console.log('Usuario inactivo');
    }
});

