//Initialize Firebase
var config = {
    apiKey: "AIzaSyASMc9X3IXHN4H7iZHs_Hx8XJQFkYFvplI",
    authDomain: "train-hw-5e478.firebaseapp.com",
    databaseURL: "https://train-hw-5e478.firebaseio.com",
    projectId: "train-hw-5e478",
    storageBucket: "",
    messagingSenderId: "261426075834"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Add Train Button
  $("add-train-btn").on("click", function(event) {
      event.preventDefault();
      //Grab user input
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainTime = $("#first-train-time-input").val().trim();
      var frequency = $("#frequency-input").val().trim();
  })