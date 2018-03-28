# TriviaGame
A Trivia game using JavaScript for the logic and jQuery to manipulate HTML.
var number = 120;

var intervalId;

$(".container").on("click", run);

function run () {
  clearInterval(intervalId);
  console.log(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#time-left").html(number);
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();
