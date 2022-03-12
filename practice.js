//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAkabXjaOaseh_xuHMXr5LnnSN8T1Uf2bo",
    authDomain: "amartya-kwitter.firebaseapp.com",
    databaseURL: "https://amartya-kwitter-default-rtdb.firebaseio.com",
    projectId: "amartya-kwitter",
    storageBucket: "amartya-kwitter.appspot.com",
    messagingSenderId: "519426241081",
    appId: "1:519426241081:web:45b33434c2b5e4747b93e8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebaseConfig.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }