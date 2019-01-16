// globals
var correct = 0;
var incorrect = 0;
var score = 0;
var timeRunning = 10;
var currentQ = 0;
var intervalId;
var clockRunning = false;
// setting the questions as an array
var questions = [
  {
    title:
      "*The character of this movie enters the Land of the  Dead to seek blessing from his grandfather? ",
    answer: ["Finding Nemo", "Moana", "Coco", "Wall E"],
    correct: 2,
    imageRight: "assets/images/giphy.gif",
    imageWrong: "assets/images/test(1).gif"
  },
  {
    title:
      "This dad sets out on a journey to bring his son home after his son is taken from the Great Reef to Sydney.",
    answer: ["Coco", "Finding Nemo", "Up", "Zootopia"],
    correct: 1,
    imageRight: "assets/images/nemo1.gif",
    imageWrong: "assets/images/Nemo.gif"
  }
];
var imageRight = [
  "<img src = 'assets/images/nemo1.gif'>",
  "<img src = 'assets/images/giphy.gif'>"
];
var imageWrong = ["assets/images/Nemo.gif", "assets/images/test(1).gif"];

window.onload = function() {
  $("#summary").hide();
  $("#reset").hide();
  showQ();
  $("#question button").on("click", run);
  $("#question button").on("click", function() {
    $(this).addClass("clicked");
    console.log($(this).attr("class"));
  });
};

//--------------------functions-----------------------
// pick a title from array and inserts the answers into the li
function showQ() {
  var question = questions[currentQ];
  $("#question button").hide();
  // prints quetion to h2
  $("h2").html(question.title);
  console.log(question.title);


  // for loop to loop through the answer property of the chosen array. then append them to the button
  for (var i = 0; i < question.answer.length; i++) {
    // creating new button with an id that i can use later.
    var newLi = $('<button id="' + i + '">' + question.answer[i] + "</button>");
    // attaching the newli to the div w a question id
    $("#question").append(newLi);
    console.log(question.answer[i]);
  };

  

};

  if (currentQ >= questions.length) {
      summary();
    } else {
      showQ();
  };

// setting up the submit function
$(".btn").on("click", function() {
  // getting the id value of the button clicked via JQ attr
  // turning the str value into interger
  var userGuess = parseInt($("button.clicked").attr("id"));
  console.log(userGuess + " line58");
  // calling the check function to compare result
  check(userGuess);
  decrement();

});


//----------------------function to check guess
function check(userGuess) {
  var question = questions[currentQ];
  console.log(question.correct);
 
  var imgRight = imageRight[Math.floor(Math.random() * imageRight.length)];
  if (userGuess == question.correct) {
    correct++;
    currentQ++;
    showQ();

    $("#img-right").html(imgRight);
    return "yay";
  }
  currentQ++;
  if (currentQ >= questions.length) {
    summary();
  } else {
    showQ();
  };


  //increment currenq outside of the if function becase the count continues whether or not if the user gets it right or not.
  //if run out of questions, then show summary, otherwise, shown next question
 
  // if (currentQ >= questions.length) {
  //   stop();
  //   summary();
  // } else {
   
  };
  //================question. i had to put currentq and show q in the if condition for the next q to load. why???????????


//------------------------function for timer
// the run function sets the timer interval at 1 second decrement
function run() {
  intervalId = setInterval(decrement, 1000);
  clockRunning= true;
}
// the decrement function decreses timeRunning by 1 interval and prints to dom
function decrement() {
  timeRunning--;
  $("#time-remaining").html("Time remaining: " + timeRunning);
}
function stop(){
  clearInterval(intervalId);
  clockRunning= false;
};


//----------------------------------------------------
function summary() {
  stop();
  $("#wrapper").hide();
  $("#summary").show();
  //set the timers for 10 sec and the time's up
  if (correct > incorrect) {
    $('#correct-text').html('You are awesome!').css('text-align','center');
  } else {
    alert("Try again");
  };
  
  $("#correct").html('Correct guess: ' + correct + ' : ');
  $("#incorrect").html('Incorrect guess: ' + incorrect + ' : ');
  $("#total").html("You scored " + correct + "out of " + questions.length);
  
};




//  ==========================================instructions======================

// --You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// --If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// --On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)
