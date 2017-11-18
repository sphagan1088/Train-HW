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
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();
    //Grab user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = $("#first-train-time-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();

    //Create local temporary object for holding train data
    var newTrain = {
        name: trainName,
        dest: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    };

    //Upload train data to the database 
    database.ref().push(newTrain);
    //Log in console
    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.time);
    console.log(newTrain.frequency);
    //Alert
    alert("Train sucessfully added");
    //Clear all text boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
});