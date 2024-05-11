//for login auth

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXFe_ZELAIrRk0D2u-hCCQsK8LgF3iYxQ",
  authDomain: "learnhub-9c4bb.firebaseapp.com",
  projectId: "learnhub-9c4bb",
  storageBucket: "learnhub-9c4bb.appspot.com",
  messagingSenderId: "474616406908",
  appId: "1:474616406908:web:65a56d0ca71196d6177af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




//implementing login functionality
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();
const email = loginForm['username'].value; // Assuming the username field is actually for email
const password = loginForm['password'].value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in successfully, redirect to dashboard or home page
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    // Handle errors, such as invalid credentials
    const errorMessage = error.message;
    console.error(errorMessage);
    // Display error message to the user
  });
});

firebase.auth().onAuthStateChanged((user) => {
if (user) {
  // User is signed in, redirect to dashboard or home page
  window.location.href = "home.html";
} else {
  // No user is signed in, continue to display login form
}
});




// Get signup form
const signupForm = document.getElementById('signup-form');

// Add event listener to signup form
signupForm.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission

// Get user input
const email = signupForm['email'].value;
const password = signupForm['password'].value;

// Create new user with email and password
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed up successfully
    const user = userCredential.user;
    console.log('User signed up:', user);
    // You can redirect the user to another page or show a success message
  })
  .catch((error) => {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Signup error:', errorCode, errorMessage);
    // You can display an error message to the user
  });
});