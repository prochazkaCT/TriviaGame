//Setting the variables:

var number = 120;
var intervalId;
var userAnswers = [];

//Writing the functions: 

function startTimer () {
  $(".input-group").on("click", function() {
  clearInterval(intervalId);
  console.log(intervalId);
  intervalId = setInterval(decrement, 1000);
  })
}

function decrement () {
  number--;
  var converted = timeConverter(number);
  $(".timer").text(converted);
  if (number === 0) {
    stop();
    alert("Time Up!");
    reset();
  }
}

function stop () {
  clearInterval(intervalId);
}

function reset() {
  number = 120;
  $(".timer").text("01:20");
}

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

//Playing the game: 
$("input:checkbox").on("click", function () {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
    userAnswers = [];
    $('input:checked').each(function() {
    userAnswers.push($(this).val());
    });
    console.log(userAnswers);
    var correctAnswers = ["one", "five", "eight", "nine", "eleven", "fourteen", "eighteen", "twentythree"];
      if (userAnswers === correctAnswers) {
        console.log("you win")
      }
});






reset();
startTimer();
timeConverter();
