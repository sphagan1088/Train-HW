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
        frequency: trainFrequency,
      
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

// Firebase event to add trains 
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
console.log(childSnapshot.val());
//Store into variable
var trainName = childSnapshot.val().name;
var trainDestination = childSnapshot.val().dest;
var trainTime = childSnapshot.val().time;
var trainFrequency = childSnapshot.val().frequency;

//Train info
console.log(trainName);
console.log(trainDestination);
console.log(trainTime);
console.log(trainFrequency);



//Moment JS 
//First Time 
var firstTime = trainTime;
//First  Time Converted
var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);
//Current Time
var currentTime = moment();
console.log("Current Time " + moment(currentTime).format("hh:mm"));
//Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes")
console.log("Difference in time: " + diffTime);  
//Time Apart 
var tRemainder = diffTime % trainFrequency;
console.log(tRemainder);
//Minutes Until Train
var tMinutesAway = trainFrequency - tRemainder;
console.log("Minutes Away: " + tMinutesAway);
//Next Arrival
var nextTrain = moment().add(tMinutesAway, "minutes");
console.log("Next Arrival: " + moment(nextTrain).format('HH : mm'));
//Add data to table
$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + 
 "</td><td>" + trainFrequency + "</td><td>" + nextTrain + "</td><td>" +tMinutesAway +  "</td></tr>");

});