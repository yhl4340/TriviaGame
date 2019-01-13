//globals
var correct= 0;
var incorrect = 0;
var score = 0;
var timeRunning = 30;
var currentQ = 0;

//setting the questions as an array
var questions = [
  {
    title:
      "*The character of this movie enters the Land of the  Dead to seek blessing from his grandfather? ",
    answer: ["Finding Nemo", "Moana", "Coco", "Wall E"],
    correct: 2
  },
  {
    title:
      "This dad sets out on a journey to bring his son home after his son is taken from the Great Reef to Sydney.",
    answer: ["Coco", "Finding Nemo", "Up", "Zootopia"],
    correct: 1
  }
];

window.onload = function() {
  showQ();
    $("#question button").on("click", function() {
    $(this).addClass("clicked");
      console.log($(this).attr("class"));

    // var guess = $(this).text();
    // $(this).attr("data-val", question.correct);
    // console.log(this);
    // console.log(guess);
    });
};

//--------------------functions-----------------------
//pick a title from array and inserts the answers into the li
function showQ() {
  var question = questions[currentQ];
  $("#question button").hide();
  $("#question").html(question.title);
  console.log(question.title);

  //for loop to loop through the answer property of the chosen array. then append them to the button
  for (var i = 0; i < question.answer.length; i++) {
  //creating new button with an id that i can use later.
    var newLi = $('<button id="' + i + '">' + question.answer[i] + "</button>"
    );
  //attaching the newli to the div w a question id
    $("#question").append(newLi);
    console.log(question.answer[i]);
  }
};


// //setting up the submit function
  $('.btn').on('click',  function() {
    
//getting the id value of the button clicked via JQ attr
//turning the str value into interger 
    var userGuess = parseInt($('button.clicked').attr('id'));
    console.log(userGuess + ' line58');
//calling the check function to compare result
    check(userGuess);
    
  });
  
  function check(userGuess){
     
    var question = questions[currentQ];
    console.log(question.correct);
    var isCorrect = false;
    if(userGuess ==  question.correct) {
      isCorrect = true;
      correct++;
      $('#correct').html('Correct: ' + correct);
      return 'yay';
  }else{
    incorrect++;
    $("#incorrect").html('Incorrect: ' + incorrect);
  }
//increment currenq outside of the if function becase the count continues whether or not if the user gets it right or not.
  currentQ++;
  showQ();
};

//    $(this).addClass('clicked');
//    console.log($(this).attr('class'));
//    var guess = $('button');
//    guess.addClass('clicked');
//    guess.attr('data-val', question.correct);

//    console.log(guess.attr('data-val'));
// });


    


function summary() {}
//set the timers for 10 sec and the time's up

//  ==========================================instructions======================

// --You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// --If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// --On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
