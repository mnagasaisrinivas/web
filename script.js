  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmd7WA2rvGw7nBwOnoZ4VpmO7RPIPpEdU",
    authDomain: "vrproject-f640c.firebaseapp.com",
    databaseURL: "https://vrproject-f640c-default-rtdb.firebaseio.com",
    projectId: "vrproject-f640c",
    storageBucket: "vrproject-f640c.appspot.com",
    messagingSenderId: "499768883182",
    appId: "1:499768883182:web:c9c57ab5abdac8342ac0ff",
    measurementId: "G-5W9QNFHRBY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const appauth = getAuth(firebaseConfig);




  const emailInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      
  
    });

    
  /*const auth = getAuth();
  signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */


  /*   function authenticateUser(username, password) {
    // Replace this with your actual authentication logic
    // For demonstration, let's use a hardcoded username and password
    const validUsername = "user@gmail.com";
    const validPassword = "password";
    
    return username === validUsername && password === validPassword;
  }

  */

  
  
 





document.getElementById("naga").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/naga-sai-srinivas-maridu-a4545728b/";
  });

 

  document.getElementById("harsha").addEventListener("click", function() {
  window.location.href = "https://www.linkedin.com/in/harsha-venkat-imadabathuni-768381253/?originalSubdomain=in";
});

