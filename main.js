import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

import { auth } from "./app/config.js"



onAuthStateChanged(auth, async (user) => {
    if (user) {
      document.getElementById("username").innerHTML= user.displayName
    }
  });