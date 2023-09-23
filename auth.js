var firebaseConfig = {
    apiKey: "AIzaSyCGWr1flNVkxcuj-EqjUz-4n1gf5v-Hkdk",
    authDomain: "rdx-e-commerce.firebaseapp.com",
    projectId: "rdx-e-commerce",
    storageBucket: "rdx-e-commerce.appspot.com",
    messagingSenderId: "426940550697",
    appId: "1:426940550697:web:ccb52cdf753c6c4ea2d638"
  };
  firebase.initializeApp(firebaseConfig);



const form = document.getElementById("registration-form");
const output = document.getElementById("output");
const redir = document.getElementById("redirect")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      var user = userCredential.user;
      output.innerHTML = `Registration successful! Welcome, ${username}!`;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      output.innerHTML = `Error: ${errorMessage}`;
    });

  redir.click
});
