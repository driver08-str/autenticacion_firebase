import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
const facebookLogin = document.getElementById('fa-facebook');
const googleLogin = document.getElementById('login-google');
const recuperar = document.getElementById('recuperar');

recuperar.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Se ha enviado un correo electrónico para restablecer la contraseña');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

googleLogin.addEventListener('click', (e) => {  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});

facebookLogin.addEventListener('click', (e) => {
    var provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...

            // Open the window
            window.open("https://www.google.com/");
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
});

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

