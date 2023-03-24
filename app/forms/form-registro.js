import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, updateUsuario } from "../config.js"

const formRegistro = document.getElementById("form-registro")

formRegistro.addEventListener("submit", async (evento) => {
  evento.preventDefault()
  const nombre = formRegistro['nombre_registro'].value;
  const email = formRegistro['email_registro'].value;
  const password = formRegistro['password_registro'].value;
  console.log(email, password, nombre)

  let status_code = ''

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    status_code = 'El usuario se creo correctamente'
    // Crear el usuario en nuestra coleccion
    const usuario = await updateUsuario(nombre);
    window.location.replace("../index/Inicio.html");
  } catch (error) {
    console.log("Ha habido un error revisalo")
    status_code = 'No se logro crear el usuario satisfactoriamente. Revise si su correo ya esta en uso e intente de nuevo'
  }

  //alert(status_code) Esto es solo para valeria

})
