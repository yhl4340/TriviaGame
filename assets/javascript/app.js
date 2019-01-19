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
    // imageRight: "assets/images/giphy.gif",
    // imageWrong: "assets/images/test(1).gif"
  },
  {
    title:
      "This dad sets out on a journey to bring his son home after his son is taken from the Great Reef to Sydney.",
    answer: ["Coco", "Finding Nemo", "Up", "Zootopia"],
    correct: 1,
    // imageRight: "assets/images/nemo1.gif",
    // imageWrong: "assets/images/Nemo.gif"
  },
  {title:
    "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    answer:['Zootopia',],
    correct:0
  },
  {title:
    "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
    answer:['Wreck-it Ralph',],
    correct:0
  },
  {title:
    "A family of superheroes try to restore the public's trust in superheros while trying to balance their family life as well.",
    answer:['The Incredibles',],
    correct:0
  },
  {title:
    "A teenage girl who is uprooted from her Midwest family live struggles to adjust to the new life. Turmoils ensue in the Headquarters where the emotions live.",
    answer:['Inside out',],
    correct:0
  },
  {title:
    "In this film, a young robotics prodigy forms a superhero team to combat a masked villain",
    answer:['Big Hero 6'],
    correct:0,
  },
  {title:
    " When two monsters employed at the factory that generates power by scaring human children find a small child at the factory, they must return her home before it is too late.",
    answer:['The Monsters Inc'],
    correct:0,
  },
  {title:
    "When an anthropomorphic rat who is interested in cooking befriends a young garbage boy, they embark on amazing culinary journey",
    answer:['Ratatouille'],
    correct:0,
  },
  {title:
    "A solitary trash compactor robot on a future deserted Earth, left to clean up garbage. However, he is visited by a probe sent by the starship Axiom, whom he falls in love with and pursues across the galaxy.",
    answer:['Wall E'],
    correct:0,
  }

];

 var imageRight = ["<img src='assets/images/nemo1.gif'>", "<img src='assets/images/test.gif'>"];
 var imgRight = imageRight[Math.floor(Math.random() * imageRight.length)];
 var imageWrong = ["<img src='assets/images/no1.gif'>", "<img src='assets/images/giphy.gif'>"];
 var imgWrong = imageWrong[Math.floor(Math.random() * imageWrong.length)];



window.onload = function() {
  $("#summary").hide();
  $("#reset").hide();
  $("#img").hide();
  showQ();
  //on click, the run function starts the clock
  $("#question button").on("click", run);
  $("#question button").on("click", function() {
    // $(this).addClass("clicked");
    console.log($(this).attr("class"));
  });
};

//--------------------FUNCTIONS-----------------------
// pick a title from array and inserts the answers into the buttons
function showQ() {
  var question = questions[currentQ];
  // prints queStion to h2
  $("h2").html(question.title);
  console.log(question.title);

  //NEED TO EMPTY THE BUTTON FIRST!!;OTHERWISE WILL HAVE REPEATED QUESTION TITLES PUSHED TO THE DOM
  $("#question").empty();
  // for loop to loop through the answer property of the chosen array. then append them to the button
  for (var i = 0; i < question.answer.length; i++) {
    // creating new button with an id that i can use later. IDs can't start with numbers. 
    var newLi = $(
      '<button data-id="' + i + '">' + question.answer[i] + "</button>"
    );
    // attaching the newli to the div w a question id
    $("#question").append(newLi);
    //whichever button clicked will have the clicked class
      $("#question button").on("click", function() {
       $(this).addClass("clicked");
       console.log($(this).addClass("clicked"));
      });  
    }
};

// if (currentQ >= questions.length) {
//   summary();
// } else {
//   showQ()

// setting up the submit function
$(".btn").on("click", function() {
  
  // getting the id value of the button clicked via JQ attr
  // turning the str value into interger
  var userGuess = parseInt($("button.clicked").attr("data-id"));
  console.log(userGuess + " line58");
  // calling the check function to compare result
 
  check(userGuess);
  decrement();
  // fiveSecond();

  
});

//----------------------function to check guess
function check(userGuess) {

    var question = questions[currentQ];
    console.log(userGuess + " == " + question.correct);//aaron's way to check code.
   
    
    if (userGuess == question.correct) {
      correct++;
      
      // $('#text').text('<p>' + 'yes' + '</p> ').show();---------not working
      // console.log($('#text').html('Yes!, it was the right answer!').show());
      // $('#img').append(question.imageRight);
  
    } else {
      $('#text').html('Nope!, it was the ' + question.correct).show();
    };
  //increment currenq outside of the if function becase the count continues whether or not if the user gets it right or not.
  //if run out of questions, then show summary, otherwise, show next question
      currentQ++;
      if (currentQ >= questions.length) {
        summary();
      } else {
        // setTimeout(fiveSecond,5000);
        showQ();
      };
      
  };
      
  
//------------------------function for timer
// the run function sets the timer interval at 1 second decrement
// setTimeout(fiveSecond,1000*5);

// function fiveSecond (){
//  summary();

// }

function run() {
  intervalId = setInterval(decrement, 1000);
  clockRunning = true;
 
}
// the decrement function decreses timeRunning by 1 interval and prints to dom
function decrement() {
  
  timeRunning--;
  $("#time-remaining").html("Time remaining: " + timeRunning);
   if(timeRunning === 0){
     clearInterval(intervalId);
     clockRunning= false;
    
     $("#time-out").show().text("Time Out");
     
    //  .css("text-align", "center").show(); THIS IS NOT WORKING
   };
};

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
  $("#time-remaining").empty();
};

//----------------------------------------------------
function summary() {
  stop();
  $("#wrapper").hide();
  $("#summary").show();
  //set the timers for 10 sec and the time's up
  if (correct > incorrect) {
    $("#summary-text")
      .html("You are awesome!")
      .css("text-align", "center");
      $("#img").append(imgRight).show();
  } else {
    $("#summary-text")
      .html("Sorry")
      .css("text-align", "center");
      $("#img").append(imgWrong).show();
   };

  $("#correct").html("Correct guess: " + correct + " : ");
  $("#incorrect").html("Incorrect guess: " + incorrect + " : ");
  $("#total").html(
    "You got " + correct + "out of " + questions.length + " correct! ");

};

//  ==========================================instructions======================

// --You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// --If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// --On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)
