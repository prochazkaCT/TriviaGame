//Setting the variables:

var number = 120;
var intervalId;
var timerRunning = false;
var corrA = ["one", "five", "eight", "nine", "eleven", "fourteen", "eighteen", "twentythree"];
var userA = [];
$(".results-container").hide();

//Writing the functions: 

function startTimer () {
  $(".input-group").on("click", function() { 
    if (!timerRunning) {
    intervalId = setInterval(decrement, 1000);
    timerRunning = true;
    }
  })
}

function decrement () {
  number--;
  var converted = timeConverter(number);
  $(".timer").text(converted);
  if (number === 0) {
    stop();
    hideStuff();
    $("#message").html("Your time is up!! You should visit countertobacco.org to brush up on your tobacco facts and then try again.");
    var unanswered = (corrA.length - userA.length);
    $("#wrong").html("You missed " + unanswered + " questions.");
  }
}

function stop () {
  clearInterval(intervalId);
  timerRunning = false;
}

function hideStuff () {
    $(".timer").hide();
    $("p").hide();
    $(".ques-container").hide();
    $(".results-container").show();
}

function reset() {
  number = 120;
  $(".timer").text("02:00");
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
  var userA = [];
  $('input:checked').each(function() {
  userA.push($(this).val());
  });
  userA.toString();
//   console.log(userA);
  function Done () {
    if (corrA.length === userA.length) {
    hideStuff();
    var matches = [];

      function getMatch(a, b) {
        for ( var i = 0; i < a.length; i++ ) {
          for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
          }
        }
      }
      getMatch(userA, corrA); 
      var wrongA = (corrA.length - matches.length);      
//       console.log("the matches are: " + matches);
//       console.log("the length of correct answers: " + corrA.length);
//       console.log("the length of matches: " + matches.length);
//       console.log("You got: " + wrongA + " wrong.");

      if (matches.length <= 5) {
        $("#message").html("You should visit countertobacco.org to brush up on your tobacco facts and then try again.");
      }

        if (wrongA < 5 && wrongA > 0) {
          $("#message").html("Not too shabby, you know your facts!");
        }

          if (wrongA === 0) {
            $("#message").html("You are a tobacco fact master!");
          }
      $("#right").html("You answered    " + matches.length + " right.");
      $("#wrong").html("You answered    " + wrongA + " wrong.");
    }
  }
Done();
});

decrement();
reset();
startTimer();
timeConverter();
stop();
