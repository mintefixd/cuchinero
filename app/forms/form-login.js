import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "../config.js"

const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", async(evento) => {
    evento.preventDefault();
    let email = loginForm["email_login"].value;
    let password = loginForm["password_login"].value;

    let  userCredentials = null
    try {
        userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials)
        loginForm.reset()
        alert("Bienvenido " + userCredentials.user.email);

    } catch (error) {
        alert("No se pudo iniciar sesion")
        console.log(userCredentials)
    }
})