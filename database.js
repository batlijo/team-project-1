




// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0zoYjv-nCRcA6ckZyE3xy2To5_RoSQvM",
    authDomain: "team2project1-3fe10.firebaseapp.com",
    databaseURL: "https://team2project1-3fe10.firebaseio.com",
    projectId: "team2project1-3fe10",
    storageBucket: "",
    messagingSenderId: "334658935081"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

var chatData = database.ref("/chat");
var playersRef = database.ref("players");
var currentTurnRef = database.ref("turn");
var username = "Guest";
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;

var queryURL = //API

      //FIREBASE FOR AUTHENTICATION (NEW TECH AS WELL)





   // performing our GET request
      $.ajax({
          url: queryURL,
          method: "GET"
        })

      // after the data request
        .done(function(response) {
          console.log(response);

          //storing the array of results in the variable
          var results = response.data;
          console.log(results);
          
});

//each square is a point value with an on click button that triggers a question
  $(document).on("click", function(event){
      
      $(this).attr("data-button", true);

      //data-button = True;
    database.ref().push({
      //need authentication first
      "clicked" : True,false;

        
      });
  }

//DATA ATTRIBUTE OR CLASS FOR HTML BUTTONS
//EASY/NORMAL/ HARD



// //info to store in firebase

// values of jeopardy grid

// link trivia questions from openTBD.com API to each value squares

// display 

// be able to add to a player score with a correct anwser.

// be able to subtract from a player's score with an incorrect anwser.

// ablity to reset game at end

// eliminating values from grid as they are being anwsered.



